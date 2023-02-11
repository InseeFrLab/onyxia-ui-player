
export type ImageProps = {
	imgUrl: string;
	width: number;
};

export function Image(props: ImageProps) {

	const { imgUrl, width } = props;

	return (
		<div
			style={{
				height: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center"
			}}
		>
			<img src={imgUrl} width={width} />
		</div>
	);

}