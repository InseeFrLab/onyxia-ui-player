import type { ReactNode } from "react";
import { useStyles, Text } from "../../theme";

export type BulletPointsProps = {
	bulletPoints: {
		text: NonNullable<ReactNode>;
		animation?: string;
	}[];
	currentIndex: number;
	spacing?: string | number;
};

export function BulletPoints(props: BulletPointsProps) {

	const { bulletPoints, currentIndex, spacing } = props;

	const { cx, css } = useStyles();

	return (
		<div
			className={css({
				height: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			})}
		>
			<div style={{ textAlign: "center" }} >

				{bulletPoints.map(({ text, animation}, i) =>
					<Text
						typo="page heading"
						className={
							cx(
								"animate__animated",
								i===currentIndex &&  animation,
								css({
									margin: 0,
									marginBottom: bulletPoints.length - 1 === i ? undefined : (spacing ?? "3rem"),
									visibility: i <= currentIndex ? undefined : "hidden"
								})
							)
						}
						key={i}
					>
						{text}
					</Text>
				)}
			</div>
		</div>
	);

}