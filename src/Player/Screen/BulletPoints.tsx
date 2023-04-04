import { type ReactNode, useState, memo } from "react";
import { useStyles, Text } from "../../theme";
import type { StatefulReadonlyEvt } from "evt";
import { useEvt } from "evt/hooks";
import { Evt } from "evt";
import { useConst } from "powerhooks/useConst";

export type BulletPointsProps = {
	bulletPoints: {
		text: NonNullable<ReactNode>;
		animation?: string;
	}[];
	currentIndex: number;
	spacing?: string | number;
};

export function BulletPoints(props: BulletPointsProps) {

	const { currentIndex, ...rest } = props;

	const evtCurrentIndex = useConst(() => Evt.create<number>(currentIndex));

	evtCurrentIndex.state = currentIndex;

	return (
		<MemoizedBulletPoints
			bulletPoints={rest.bulletPoints}
			spacing={rest.spacing}
			evtCurrentIndex={evtCurrentIndex}
		/>
	);

}

const MemoizedBulletPoints = memo(
	(
		props: {
			bulletPoints: {
				text: NonNullable<ReactNode>;
				animation?: string;
			}[];
			evtCurrentIndex: StatefulReadonlyEvt<number>;
			spacing?: string | number;
		}
	) => {

		const { bulletPoints, evtCurrentIndex, spacing } = props;

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
);

function BulletPoint(
	props: {
		className: string;
		thisBulletPointIndex: number;
		evtCurrentIndex: StatefulReadonlyEvt<number>;
		animation: string | undefined;
		children: NonNullable<ReactNode>;
	}
) {


	const {
		className,
		thisBulletPointIndex, evtCurrentIndex, animation,
		children
	} = props;

	const { cx, css } = useStyles();

	const [dynamicClassName, setDynamicClassName] = useState<string | undefined>(undefined);

	useEvt(
		ctx => {

			evtCurrentIndex.attach(ctx, currentIndex => {

				const isVisible = currentIndex >= thisBulletPointIndex;

				setDynamicClassName(isVisible ? animation : css({ visibility: "hidden" }));

			});

		},
		[]
	);

	return (
		<Text
			typo="page heading"
			className={cx("animate__animated", dynamicClassName,
				className
			)}
		>
			{children}
		</Text>
	);

};