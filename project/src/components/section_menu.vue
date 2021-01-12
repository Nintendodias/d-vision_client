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
						<b-nav-item href="#" :active="tab === 1" @click="tab = 1">Кейсы</b-nav-item>

						<b-nav-item-dropdown text="О нас" right>
							<b-dropdown-item href="#">Наши возможности</b-dropdown-item>
							<b-dropdown-item href="#">Стратегический продакшн</b-dropdown-item>
							<b-dropdown-item href="#">PR</b-dropdown-item>
						</b-nav-item-dropdown>

						<b-nav-item-dropdown text="Digital школа для фармы" right>
							<b-dropdown-item href="#">test_1</b-dropdown-item>
							<b-dropdown-item href="#">test_2</b-dropdown-item>
							<b-dropdown-item href="#">test_3</b-dropdown-item>
						</b-nav-item-dropdown>

						<b-button size="sm" class="my-2 my-sm-0 feedback" type="submit"><span>Связаться с нами</span></b-button>
					</b-navbar-nav>
				</b-collapse>
			</b-navbar>
		</div>
	</menu>
</template>

<script>
	export default {
		name: 'section_menu',
		props: {
			msg: String,
		},
		data() {
			return {
				tab: 1,
			};
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
		background: linear-gradient(90.01deg, rgba(40, 12, 89, 0.7) 70%, rgba(40, 12, 89, 0.8) 85%, rgba(40, 12, 89, 0.9) 90%, rgba(40, 12, 89, 0.8) 85%, rgba(33, 19, 89, 0.7) 70%);

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

			.dropdown-item:hover, .dropdown-item:focus {
				background: none;
			}

			li {
				position: relative;
				padding: 0;

				a {
					padding: 0.2em 1em;
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
