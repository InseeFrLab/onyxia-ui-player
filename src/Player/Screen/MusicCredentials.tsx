
import type { ReactNode } from "react";
import { useStyles } from "../../theme";


export type MusicCredentialsProps = {
	title: ReactNode;
	band: ReactNode;
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
				<p
					className={
						cx(
						css({
							margin: 0,
							textTransform: "uppercase",
							fontSize: "3.5rem",
							lineHeight: "4rem",
						})
						)
					}
				>
					{title}
				</p>
				<p
					className={
						css({
							margin: 0,
							marginTop: theme.spacing(5),
							textTransform: "uppercase",
							fontSize: "3.5rem",
							lineHeight: "4rem",
						})
					}
				>
					{band}
				</p>
			</div>
		</div>
	);
}