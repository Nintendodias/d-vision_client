<template>
	<div id="wrapper" data-scroll="1">
		<section_menu @changeTab='onChangeTab' />
		<section_start />
		<section_about />
		<section_wedo />
		<section_slider />
		<section_analytic />
		<section_pr />
		<section_digitalSchool :digitalTab='digitalTab' />
		<section_footer />
	</div>
</template>

<script>
	import Vue from 'vue';
	import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

	import 'bootstrap/dist/css/bootstrap.css';
	import 'bootstrap-vue/dist/bootstrap-vue.css';

	Vue.use(BootstrapVue);
	Vue.use(BootstrapVueIcons);

	import section_menu from './components/section_menu.vue';
	import section_start from './components/section_start.vue';
  import section_about from './components/section_about.vue';
	import section_wedo from './components/section_wedo.vue';
	import section_analytic from './components/section_analytic.vue';
	import section_pr from './components/section_pr.vue';
	import section_digitalSchool from './components/section_digitalSchool.vue';
	import section_footer from './components/section_footer.vue';
	import section_slider from './components/section_slider.vue';

	export default {
		name: 'App',
		components: {
			section_menu,
			section_start,
			section_about,
			section_wedo,
			section_slider,
			section_analytic,
			section_pr,
			section_digitalSchool,
			section_footer,
		},
		data() {
			return {
				digitalTab: 3
			}
		},
		methods: {
			onChangeTab (data) {
				console.log(data.digitalTab)
				this.digitalTab = data.digitalTab;
			}
		}
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
	#wrapper {
		// &[data-scroll='1'] {
		// 	#logo {
		// 		visibility: hidden;
		// 	}
		// }
	}
	img {
		display: block;
		max-width: 100%;
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
		padding: 5em 0;
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
      color: var(--color-pink);
		}
		&-digital-blue {
			color: #4696F5;
		}
		&-digital-green {
			color: #36A7C0;
		}
		&-digital-violet {
			color: #A01DC1;
		}
	}
	ul {
		padding-left: 20px;
	}
	.line {
		width: 100%;
		height: 1px;
		background: #4696F5;
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

		span {
			display: flex;
			align-items: center;
			justify-content: center;

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

	section {
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
	@media (max-width: 1600px) {
		section {
			&.section_about, &.section_analytic, &.section_pr  {
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
	}
</style>
