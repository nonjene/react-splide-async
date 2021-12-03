declare module "react-splide-async" {
	import type { Options, Splide as SplideObj } from "@splidejs/splide";

	import type { CSSProperties } from "react";

	export type SplideRef = { splide: SplideObj } | undefined;

	export type SplideOptions = Options;

	// Other options see: https://splidejs.com/integration-react-splide/
	export interface SplideProps {
		ref?: React.MutableRefObject<SplideRef>;
		className?: string;
		style?: CSSProperties;
		options?: Options;
		onMoved?: (
			instance: SplideObj,
			newIndex: number,
			oldIndex: number,
			destIndex: number
		) => void;
		onMove?: (
			instance: SplideObj,
			newIndex: number,
			oldIndex: number,
			destIndex: number
		) => void;
		onMounted?: (instance: SplideObj) => void;
	}
	export type SplideObject = SplideObj;

	export const Splide: React.FC<SplideProps>;
	export const SplideSlide: React.FC;
}
