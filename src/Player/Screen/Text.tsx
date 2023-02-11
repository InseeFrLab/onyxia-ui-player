import type { ReactNode } from "react";
import { useStyles, Text as DsText } from "../../theme";

export type TextProps = {
	text: NonNullable<ReactNode>;
	animation?: string;
};

export function Text(props: TextProps) {

	const { text, animation } = props;

	const { cx, css } = useStyles();

	return (
		<div
			style={{
				height: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				textAlign: "center"
			}}
		>
			<DsText
				typo="page heading"
				className={cx(
					animation !== undefined && "animate__animated",
					animation
				)}
			>
				{text}
			</DsText>
		</div>
	);


}