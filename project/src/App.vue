<template>
	<div id="wrapper">
		<section_menu @changeTab="onChangeTab" />
		<transition name="fade">
			<router-view :digitalTab="digitalTab" />
		</transition>
		<section_footer />
	</div>
</template>

<script>
	import Vue from 'vue';
	import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
	import {scroller} from 'vue-scrollto/src/scrollTo'

	import 'bootstrap/dist/css/bootstrap.css';
	import 'bootstrap-vue/dist/bootstrap-vue.css';

	Vue.use(BootstrapVue);
	Vue.use(BootstrapVueIcons);

	import section_menu from './components/section_menu.vue';
	import section_footer from './components/section_footer.vue';
	
	var VueScrollTo = require('vue-scrollto');

	Vue.use(VueScrollTo, {
		container: 'body',
		duration: 500,
		easing: 'ease',
		offset: -50,
		force: true,
		cancelable: true,
		onStart: false,
		onDone: false,
		onCancel: false,
		x: false,
		y: true,
	});

	if (window.location.hash.includes('school')) {
		setTimeout(() => {
			const firstScrollTo = scroller();

			firstScrollTo('.section_digitalSchool')
		}, 500)
	}

	export default {
		name: 'App',
		components: {
			section_menu,
			section_footer,
		},
		data() {
			return {
				digitalTab: 1,
			};
		},
		methods: {
			onChangeTab(data) {
				this.digitalTab = data.digitalTab;
			},
		},
	};
</script>

<style lang="less">
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

	#wrapper {
		font-family: var(--main-font);
		color: var(--main-color);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-weight: 500;
		font-style: normal;
		font-size: var(--main-font-size);
		line-height: 1.666;
		background: linear-gradient(180deg, #191355 30%, #371365 100%);
	}
	body {
		overflow-x: hidden;
		background: #371365;
	}
	* {
		box-sizing: border-box;
		z-index: 0;
		position: relative;
	}
	:root {
		--main-font: 'Montserrat', sans-serif;
		--main-color: #272727;
		--color-white: #fff;
		--main-font-size: 18px;
		--color-pink: #ee0683;
		--color-neon: #77fdf0;
		--color-blue: #4ed9f9;
	}
	img {
		display: block;
		max-width: 100%;
		user-select: none;
	}
	button {
		padding: 0;
		border: none !important;
		font: inherit;
		color: inherit;
		background-color: transparent;
		cursor: pointer;

		&:focus {
			outline: none;
		}
	}
	a {
		text-decoration: none !important;
		color: inherit !important;
		display: block;
	}
	h1,
	h2,
	h3,
	h4,
	p,
	address {
		margin: 0;
	}
	/* text defaulte */
	.text {
		&-left {
			text-align: left;
		}
		&-center {
			text-align: center;
		}
		&-bold {
			font-weight: bold;
		}
		&-right {
			text-align: right;
		}
		&-semi {
			font-weight: 700;
		}
		&-italic {
			font-style: italic;
		}
		&-normal {
			font-weight: 500;
		}
		&-transform {
			text-transform: uppercase;
		}
		&-white {
			color: var(--color-white);
		}
		&-light {
			font-weight: 300;
		}
	}
	.text-margin + .text-margin {
		margin-top: 1em;
	}
	.items-center {
		margin: 0 auto;
	}
	//grid
	section,
	footer {
		padding: 7em 0;
	}
	.section__content {
		width: 100%;
		& + .section__content {
			margin-top: 2em;
		}
		.section__content {
			margin-top: 2em;
		}
	}
	.grid {
		position: relative;
		margin-left: auto;
		margin-right: auto;
		// padding-left: 15px;
		// padding-right: 15px;
		max-width: 1170px;
		width: 100%;
		z-index: 200;
	}
	.grid__row {
		position: relative;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-wrap: wrap;
		flex-wrap: wrap;
		margin-left: -15px;
		margin-right: -15px;
	}
	//justify-content
	.grid__row._lg_content_between {
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
	}
	.grid__row._lg_content_around {
		justify-content: space-around;
	}
	.grid__row._lg_content_start {
		justify-content: flex-start;
	}
	.grid__row._lg_content_end {
		justify-content: flex-end;
	}
	.grid__row._lg_content_center {
		justify-content: center;
	}
	//align-items
	.grid__row._lg_items_end {
		-webkit-box-align: end;
		-ms-flex-align: end;
		align-items: flex-end;
	}
	.grid__row._lg_items_start {
		align-items: flex-start;
	}
	.grid__row._lg_items_center {
		align-items: center;
	}
	.grid__row._lg_items_stretch {
		align-items: stretch;
	}
	.grid__col {
		padding-left: 15px;
		padding-right: 15px;

		&._col_flex {
			display: flex;
			align-items: flex-start;
			justify-content: center;
			flex-direction: column;
		}
	}
	.grid__col._lg_1 {
		width: 8.33333%;
	}
	.grid__col._lg_2 {
		width: 16.66667%;
	}
	.grid__col._lg_3 {
		width: 25%;
	}
	.grid__col._lg_4 {
		width: 33.33333%;
	}
	.grid__col._lg_5 {
		width: 41.66667%;
	}
	.grid__col._lg_6 {
		width: 50%;
	}
	.grid__col._lg_7 {
		width: 58.33333%;
	}
	.grid__col._lg_8 {
		width: 66.66667%;
	}
	.grid__col._lg_9 {
		width: 75%;
	}
	.grid__col._lg_10 {
		width: 83.33333%;
	}
	.grid__col._lg_11 {
		width: 91.66667%;
	}
	.grid__col._lg_12 {
		width: 100%;
	}

	.text {
		&-blue {
			color: var(--color-blue) !important;
		}
		&-neon {
			color: var(--color-neon);
		}
		&-pink {
			color: var(--color-pink) !important;
		}
		&-digital-blue {
			color: #4696f5!important;
		}
		&-digital-green {
			color: #36a7c0!important;
		}
		&-digital-violet {
			color: #a01dc1!important;
		}
	}
	ul {
		padding-left: 20px;
	}
	.line {
		width: 100%;
		height: 1px;
		background: #4696f5;
		margin: 2em 0;
	}
	//90
	h1 {
		font-size: 90px;
	}
	h2 {
		font-size: 50px;
	}
	h3 {
		font-size: 60px;
	}
	//47
	h3 {
		font-size: 47px;
	}
	.number {
		font-size: 40px;
	}
	#digital {
		font-size: 61px;
	}
	//33
	.title {
		line-height: 1;
		&._lg {
			font-size: 33px;
			line-heigh: 43px;
		}
		&._md {
			font-size: 24px;
			line-height: 32px;
		}
	}
	.feedback {
		height: 44px;
		width: 190px;
		border: 3px solid #4ed9f9 !important;
		border-radius: 60px;
		background: none;
		color: var(--color-neon) !important;
        display: flex;
        align-items: center;
        justify-content: center;
		span {
			display: flex;
			align-items: center;
			justify-content: center;
            color: var(--color-neon) !important;

			&:before {
				content: '';
				display: block;
				width: 6px;
				height: 6px;
				background: var(--color-pink);
				border-radius: 50%;
				flex-shrink: 0;
				margin-right: 10px;
			}
		}

		&:hover {
			background: none;
		}
	}
	.animation {
		opacity: 0;
		animation-fill-mode: both !important;
	}

.bottom-space {padding-bottom:2em;}
	.section__content {
		&._visible {
			.animation {
				&._type {
					&_fadeIn {
						animation-name: fadeIn;
					}

					&_slideInUp {
						animation-name: fadeIn, slideUp_1x;

						&-2x {
							animation-name: fadeIn, slideUp_2x;
						}
					}

					&_slideInDown {
						animation-name: fadeIn, slideDown_1x;

						&-2x {
							animation-name: fadeIn, slideDown_2x;
						}
					}

					&_slideInLeft {
						animation-name: fadeIn, slideLeft_1x;

						&-2x {
							animation-name: fadeIn, slideLeft_2x;
						}
					}

					&_slideInRight {
						animation-name: fadeIn, slideRight_1x;

						&-2x {
							animation-name: fadeIn, slideRight_2x;
						}
					}
				}
			}
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes fadeOut {
		from {
			opacity: 1;
		}
		to {
			opacity: 0;
		}
	}

	@keyframes slideUp_1x {
		from {
			transform: translateY(15px);
		}
		to {
			transform: translateY(0);
		}
	}

	@keyframes slideUp_2x {
		from {
			transform: translateY(30px);
		}
		to {
			transform: translateY(0);
		}
	}

	@keyframes slideDown_1x {
		from {
			transform: translateY(-15px);
		}
		to {
			transform: translateY(0);
		}
	}

	@keyframes slideDown_2x {
		from {
			transform: translateY(-30px);
		}
		to {
			transform: translateY(0);
		}
	}

	@keyframes slideLeft_1x {
		from {
			transform: translateX(-15px);
		}
		to {
			transform: translateY(0);
		}
	}

	@keyframes slideLeft_2x {
		from {
			transform: translateX(-30px);
		}
		to {
			transform: translateY(0);
		}
	}

	@keyframes slideRight_1x {
		from {
			transform: translateX(15px);
		}
		to {
			transform: translateY(0);
		}
	}

	@keyframes slideRight_2x {
		from {
			transform: translateX(30px);
		}
		to {
			transform: translateY(0);
		}
	}
	//vue animation
	.fade-enter-active,
	.fade-leave-active {
		transition-property: opacity;
		transition-duration: 0.25s;
	}

	.fade-enter-active {
		transition-delay: 0.25s;
	}

	.fade-enter,
	.fade-leave-active {
		opacity: 0;
	}
	
	@media (max-width: 1600px) {
		section {
			&.section_about,
			&.section_analytic,
			&.section_pr {
				background: none !important;
			}
		}
		.grid__col._md_1 {
			width: 8.33333%;
		}
		.grid__col._md_2 {
			width: 16.66667%;
		}
		.grid__col._md_3 {
			width: 25%;
		}
		.grid__col._md_4 {
			width: 33.33333%;
		}
		.grid__col._md_5 {
			width: 41.66667%;
		}
		.grid__col._md_6 {
			width: 50%;
		}
		.grid__col._md_7 {
			width: 58.33333%;
		}
		.grid__col._md_8 {
			width: 66.66667%;
		}
		.grid__col._md_9 {
			width: 75%;
		}
		.grid__col._md_10 {
			width: 83.33333%;
		}
		.grid__col._md_11 {
			width: 91.66667%;
		}
		.grid__col._md_12 {
			width: 100%;
		}
	}
	@media (max-width: 768px) {
		.section__content .section__content {
			margin-top: 1em;
		}
		.grid {
			padding-left: 15px;
			padding-right: 15px;
		}
		.grid__col._sm_12 + .grid__col._sm_12 {
			margin-top: 1em;
		}
		.grid__row._sm_reverse {
			flex-direction: row-reverse;
		}
		.grid__row._sm_reverse_col {
			flex-direction: column-reverse;
		}
		.grid__row._sm_reverse .text-right {
			text-align: left;
		}
		.grid__row._sm_content_center {
			-webkit-box-pack: center;
			-ms-flex-pack: center;
			justify-content: center;
		}
		.grid__row._sm_items_start {
			-webkit-box-align: start;
			-ms-flex-align: start;
			align-items: flex-start;
		}

		.grid__row._sm_items_end {
			-webkit-box-align: end;
			-ms-flex-align: end;
			align-items: flex-end;
		}

		.grid__row._sm_items_center {
			-webkit-box-align: center;
			-ms-flex-align: center;
			align-items: center;
		}
		.grid__row._sm_items_center {
			align-items: space-between;
		}
		.grid__col._sm_1 {
			width: 8.33333%;
		}

		.grid__col._sm_2 {
			width: 16.66667%;
		}

		.grid__col._sm_3 {
			width: 25%;
		}

		.grid__col._sm_4 {
			width: 33.33333%;
		}

		.grid__col._sm_5 {
			width: 41.66667%;
		}

		.grid__col._sm_6 {
			width: 50%;
		}

		.grid__col._sm_7 {
			width: 58.33333%;
		}

		.grid__col._sm_8 {
			width: 66.66667%;
		}

		.grid__col._sm_9 {
			width: 75%;
		}

		.grid__col._sm_10 {
			width: 83.33333%;
		}

		.grid__col._sm_11 {
			width: 91.66667%;
		}

		.grid__col._sm_12 {
			width: 100%;
		}
		.grid__col._sm_0 {
			display: none;
		}
		section {
			padding: 2em 0;
		}
		h2 {
			font-size: 40px;
		}
		h3 {
			font-size: 35px;
		}
		.title._md {
			font-size: 20px;
			line-height: 29px;
		}
	}
</style>
