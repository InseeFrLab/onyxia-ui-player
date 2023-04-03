
import type { ReactNode } from "react";
import { useStyles, Text } from "../../theme";


export type MusicCredentialsProps = {
	title: NonNullable<ReactNode>;
	band: NonNullable<ReactNode>;
};

export function MusicCredentials(props: MusicCredentialsProps) {

	const { band, title } = props;

	const { css, cx, theme } = useStyles();

	return (
		<div
			style={{
				height: "100%",
				position: "relative"
			}}
		>
			<div
				className={css({
					position: "absolute",
					left: "3rem",
					bottom: "3rem",
					color: theme.colors.useCases.typography.textTertiary
				})}
			>
				<Text
					typo="body 1"
					className={
						cx(
						css({
							margin: 0,
							textTransform: "uppercase",
						})
						)
					}
				>
					{title}
				</Text>
				<Text
					typo="body 1"
					className={
						css({
							margin: 0,
							marginTop: theme.spacing(5),
							textTransform: "uppercase",
						})
					}
				>
					{band}
				</Text>
			</div>
		</div>
	);
}