<template>
	<menu class="section_menu">
		<div class="grid">
			<b-navbar toggleable="lg">
				<b-navbar-brand href="#">
					<img src="../assets/logo_d-vision.png" alt="" id="logo" />
				</b-navbar-brand>

				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

				<b-collapse id="nav-collapse" is-nav>
					<b-navbar-nav class="ml-auto">
						<b-nav-item href="#">Кейсы</b-nav-item>

						<b-nav-item-dropdown text="О нас" right>
							<b-dropdown-item href="#" v-scroll-to="'.section_wedo'">Наши возможности</b-dropdown-item>
							<b-dropdown-item href="#" v-scroll-to="'.section_slider'">Стратегический продакшн</b-dropdown-item>
							<b-dropdown-item href="#" v-scroll-to="'.section_pr'">PR</b-dropdown-item>
						</b-nav-item-dropdown>

						<b-nav-item-dropdown text="Digital школа для фармы" right>
							<b-dropdown-item href="#"  @click="tab = 1, changeTab()" v-scroll-to="'#digital_container'">Grade</b-dropdown-item>
							<b-dropdown-item href="#"  @click="tab = 2, changeTab()" v-scroll-to="'#digital_container'">Middle</b-dropdown-item>
							<b-dropdown-item href="#" @click="tab = 3, changeTab()" v-scroll-to="'#digital_container'">High</b-dropdown-item>
						</b-nav-item-dropdown>

						<b-button
							v-scroll-to="'.section_footer'"
							size="sm"
							class="my-2 my-sm-0 feedback"
							type="submit"
							><span>Связаться с нами</span></b-button
						>
					</b-navbar-nav>
				</b-collapse>
			</b-navbar>
		</div>
	</menu>
</template>

<script>
	import Vue from 'vue';
	var VueScrollTo = require('vue-scrollto');

	Vue.use(VueScrollTo, {
		container: 'body',
		duration: 500,
		easing: 'ease',
		offset: 0,
		force: true,
		cancelable: true,
		onStart: false,
		onDone: false,
		onCancel: false,
		x: false,
		y: true,
	});
	
	export default {
		name: 'section_menu',
		props: {
			msg: String,
		},
		data() {
			return {
				tab: 1,
			};
		},
		methods: {
			changeTab () {
				this.$emit('changeTab', {
					digitalTab: this.tab
				})
			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	.section_menu {
		position: fixed;
		top: 0;
		width: 100%;
		background: none;
		margin: 0;
		z-index: 50;
		background: linear-gradient(
			90.01deg,
			rgba(40, 12, 89, 0.7) 70%,
			rgba(40, 12, 89, 0.8) 85%,
			rgba(40, 12, 89, 0.9) 90%,
			rgba(40, 12, 89, 0.8) 85%,
			rgba(33, 19, 89, 0.7) 70%
		);

		* {
			z-index: 100;
		}

		a {
			color: var(--color-white) !important;
		}

		.nav-link {
			transition: 1s;
			color: var(--color-white) !important;
			padding-right: 1rem !important;
			padding-left: 1rem !important;

			span {
				color: var(--color-white) !important;
			}
		}

		.dropdown {
			&:focus {
				border: none !important;
			}
			&.show {
				.dropdown-toggle::after {
					transform: rotate(180deg);
				}
			}
		}

		.dropdown-menu {
			background: rgba(40, 12, 89, 0.8);
			backdrop-filter: blur(10px);
			padding: 0;
			min-width: 18rem;

			.dropdown-item:hover,
			.dropdown-item:focus {
				background: none;
			}

			li {
				position: relative;
				padding: 0;

				a {
					padding: 0.2em 1em;
					background: none !important;
				}

				&:after {
					position: absolute;
					top: 50%;
					right: 0;
					transform: translate(-50%, -50%);
					content: '';
					background: url(../assets/arrow.png) center / contain no-repeat;
					width: 17px;
					height: 8px;
					transition: 1s;
					opacity: 0.5;
					display: block;
				}

				&:hover {
					&:after {
						opacity: 1;
					}
				}
			}
		}
	}
</style>
