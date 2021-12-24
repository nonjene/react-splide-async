/**
 * Thumbnail slider example.
 *
 * @author    Naotoshi Fujita
 * @copyright Naotoshi Fujita. All rights reserved.
 */

import React from "react";
import { Splide, SplideSlide } from "../../../../src/js";
import { createSlides } from "../utils/slides";

/**
 * The class for the thumbnail slider example.
 * Need to call sync() after the component is mounted, using refs.
 */
export default class ThumbnailsExample extends React.PureComponent {
	/**
	 * ThumbnailExample constructor.
	 *
	 * @param {Object} props - Props.
	 */
	constructor(props) {
		super(props);

		this.splides = React.createRef();
	}

	/**
	 * Set the sync target right after the component is mounted.
	 */
	onInitSplide(splide) {
		this.splides.current = this.splides.current || [];
		this.splides.current.push(splide);

		console.log(this.splides.current);

		if (this.splides.current.length === 2) {
			const [first, sec] = this.splides.current;
			first.sync(sec);
			first.mount();
			sec.mount();
		}
	}

	/**
	 * Render slides.
	 *
	 * @return {ReactNode[]}
	 */
	renderSlides() {
		return createSlides().map((slide) => (
			<SplideSlide key={slide.src}>
				<img src={slide.src} alt={slide.alt} />
			</SplideSlide>
		));
	}

	/**
	 * Render the component.
	 *
	 * @return {ReactNode} - React component.
	 */
	render() {
		const primaryOptions = {
			type: "loop",
			perPage: 1,
			perMove: 1,
			gap: "1rem",
			pagination: false,
		};

		const secondaryOptions = {
			type: "slide",
			rewind: true,
			gap: "1rem",
			pagination: false,
			fixedWidth: 110,
			fixedHeight: 70,
			cover: true,
			focus: "center",
			isNavigation: true,
			updateOnMove: true,
		};

		return (
			<div className="wrapper">
				<h2>Thumbnail Slider</h2>

				<a
					href="https://github.com/Splidejs/react-splide/blob/master/examples/src/js/components/ThumbnailsExample.jsx"
					target="_blank"
					rel="noopener"
				>
					View Code
				</a>

				<Splide
					options={primaryOptions}
					onInited={this.onInitSplide.bind(this)}
					manualMount
				>
					{this.renderSlides()}
				</Splide>

				<Splide
					options={secondaryOptions}
					onInited={this.onInitSplide.bind(this)}
					manualMount
				>
					{this.renderSlides()}
				</Splide>
			</div>
		);
	}
}
