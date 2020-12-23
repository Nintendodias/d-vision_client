<template>
	<div id="wrapper" data-scroll='1'>
		<section_menu />
		<section_start />
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

	export default {
		name: 'App',
		components: {
			section_menu,
			section_start,
		},
	};
</script>

<style lang="less">
	@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
	#wrapper {
		font-family: var(--main-font);
		color: var(--main-color);
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-weight: 500;
		font-style: normal;
		font-size: var(--main-font-size);
		line-height: 1.666;
	}
	body {
		overflow-x: hidden;
	}
	* {
		box-sizing: border-box;
		z-index: 0;
	}
	:root {
		--main-font: 'Roboto', sans-serif;
		--main-color: #272727;
		--color-white: #fff;
		--main-font-size: 18px;
	}
	#wrapper {
    &[data-scroll='1'] {
			#logo {
				visibility: hidden;
			}
		}
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
		padding: 4em 0;
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
  h1 {
    font-size: 40px;
  }
</style>
