

import { useReducer, useEffect, EffectCallback, useState } from "react";
import type { ScreenProps } from "./Screen";
import { Screen } from "./Screen";
import { GlobalStyles } from "onyxia-ui/tss";


export type PlayerProps = {
	items: PlayerProps.Item[];
	specificIndex?: number;
};

export namespace PlayerProps {

	export type Item = { effect?: EffectCallback; } & (
		| Item.Image
		| Item.MusicCredential
		| Item.BulletPoints
		| Item.Text
	);

	export namespace Item {

		export type Image = ScreenProps.Image & { duration: number; };
		export type MusicCredential = ScreenProps.MusicCredential & { duration: number; };
		export type BulletPoints = Omit<ScreenProps.BulletPoints, "bulletPoints" | "currentIndex"> & { bulletPoints: (ScreenProps.BulletPoints["bulletPoints"][number] & { duration: number; })[]; };
		export type Text = ScreenProps.Text & { duration: number; };

	}

}


export function Player(props: PlayerProps) {

	const { items, specificIndex } = props;

	const [index, incrementIndex] = useReducer(index => index + 1, specificIndex ?? 0);

	const item = items[index];

	useEffect(
		() => {

			if (specificIndex !== undefined) {
				return;
			}

			const cleanup = item.effect?.();

			const safeCleanup = ()=> { requestAnimationFrame(()=> cleanup?.()) };


			if (index === items.length - 1) {
				return safeCleanup;
			}

			setTimeout(
				incrementIndex,
				item.type === "bullet points" ?
					item.bulletPoints.map(({ duration }) => duration).reduce((curr, prev) => curr + prev, 0) :
					item.duration
			);

			return safeCleanup;

		},
		[index]
	);

	return (
		<>
			<GlobalStyles
				styles={{
					body: { margin: 0 }
				}}
			/>
			{item.type === "bullet points" ? <BulletPointsDsfrPlayer key={index} {...item} /> : <Screen key={index} {...item} />}
		</>
	)


}

function BulletPointsDsfrPlayer(props: PlayerProps.Item.BulletPoints) {

	const { bulletPoints, ...rest } = props;

	const [index, incrementIndex] = useReducer(index => index + 1, 0);

	useEffect(
		() => {

			if (index === bulletPoints.length - 1) {
				return;
			}

			setTimeout(
				incrementIndex,
				bulletPoints[index].duration
			);
		},
		[index]
	);

	return (
			<Screen
				bulletPoints={bulletPoints}
				currentIndex={index}
				{...rest}
			/>
	);


}