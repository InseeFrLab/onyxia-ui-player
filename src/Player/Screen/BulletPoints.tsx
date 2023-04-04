import { type ReactNode, memo } from "react";
import { useStyles, Text } from "../../theme";
import type { StatefulReadonlyEvt } from "evt";
import { useEvt, useRerenderOnStateChange } from "evt/hooks";
import { Evt } from "evt";
import { useConst } from "powerhooks/useConst";
import { useConstCallback } from "powerhooks/useConstCallback";

export type BulletPointsProps = {
	bulletPoints: {
		text: NonNullable<ReactNode>;
		animation?: string;
	}[];
	currentIndex: number;
	spacing?: string | number;
};

export function BulletPoints(props: BulletPointsProps) {

	const { currentIndex, bulletPoints, spacing } = props;

	const evtCurrentIndex = useConst(() => Evt.create<number>(currentIndex));

	evtCurrentIndex.state = currentIndex;

	const { css, theme } = useStyles();

	return (

		<div
			className={css({
				height: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center"
			})}
		>
			<div style={{ textAlign: "center" }} >
				{bulletPoints.map(({ text, animation }, i) =>
					<BulletPoint
						key={i}
						className={css({
							marginBottom: bulletPoints.length - 1 === i ? undefined : (spacing ?? (theme.typography.rootFontSizePx * 0.7))
						})}
						thisBulletPointIndex={i}
						evtCurrentIndex={evtCurrentIndex}
						animation={animation}
					>
						{text}
					</BulletPoint>
				)}
			</div>
		</div>

	);

}

const  BulletPoint = memo((
	props: {
		className: string;
		thisBulletPointIndex: number;
		evtCurrentIndex: StatefulReadonlyEvt<number>;
		animation: string | undefined;
		children: NonNullable<ReactNode>;
	}
) => {

	const {
		className,
		thisBulletPointIndex, evtCurrentIndex, animation,
		children
	} = props;

	const { cx, css } = useStyles();

	const getDynamicClassName = useConstCallback((params: { currentIndex: number; })=>{
		const { currentIndex } = params;

		const isVisible = currentIndex >= thisBulletPointIndex;

		const newDynamicClassName = isVisible ? animation : css({ visibility: "hidden" });

		return newDynamicClassName;

	});

	const evtDynamicClassName = useConst(() => Evt.create<string | undefined>(getDynamicClassName({
		"currentIndex": evtCurrentIndex.state
	})));

	useRerenderOnStateChange(evtDynamicClassName);

	useEvt(
		ctx => {

			evtCurrentIndex.attach(ctx, currentIndex => {

				const newDynamicClassName = getDynamicClassName({ currentIndex });

				if( newDynamicClassName === evtDynamicClassName.state ){
					return;
				}

				requestAnimationFrame(()=> evtDynamicClassName.state =newDynamicClassName);

			});

		},
		[]
	);

	return (
		<Text
			typo="page heading"
			className={cx("animate__animated", evtDynamicClassName.state, className)}
		>
			{children}
		</Text>
	);

});