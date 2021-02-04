<template>
	<menu class="section_menu">
		<div class="grid">
			<b-navbar toggleable="lg">
				<b-navbar-brand href="#">
					<router-link to='/' ><img src="../assets/logo_d-vision.png" alt="" id="logo" /></router-link>
				</b-navbar-brand>

				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

				<b-collapse id="nav-collapse" is-nav>
					<b-navbar-nav class="ml-auto">
						<b-nav-item href="#" ><router-link to='/projects'>Кейсы</router-link></b-nav-item>
						
						
						<b-nav-item-dropdown text="О нас" right>
							<b-dropdown-item href="#" v-scroll-to="'.section_wedo'"><router-link to='/'>Наши возможности</router-link></b-dropdown-item>
							<b-dropdown-item href="#" v-scroll-to="'.section_slider'"><router-link to='/'>Стратегический продакшн</router-link></b-dropdown-item>
							<b-dropdown-item href="#" v-scroll-to="'.section_pr'"><router-link to='/'>PR</router-link></b-dropdown-item>
						</b-nav-item-dropdown>
						

						<b-nav-item-dropdown text="Digital школа для фармы" right>
							<b-dropdown-item href="#"  @click="tab = 1, changeTab()" v-scroll-to="'#digital_container'"><router-link to='/'>Grade</router-link></b-dropdown-item>
							<b-dropdown-item href="#"  @click="tab = 2, changeTab()" v-scroll-to="'#digital_container'"><router-link to='/'>Middle</router-link></b-dropdown-item>
							<b-dropdown-item href="#" @click="tab = 3, changeTab()" v-scroll-to="'#digital_container'"><router-link to='/'>High</router-link></b-dropdown-item>
						</b-nav-item-dropdown>

						<a href="mailto:info@digitvision.ru?subject=Получить свою стратегию&body=Здравствуйте! 
						Пожалуйста, свяжитесь со мной."
							size="sm"
							class="btn my-2 my-sm-0 feedback btn-secondary btn-sm"
						
							><span>Связаться с нами</span></a>
					</b-navbar-nav>
				</b-collapse>
			</b-navbar>
		</div>
	</menu>
</template>

<script>
	
	export default {
		name: 'section_menu',
		data() {
			return {
				tab: 1,
			};
		},
		methods: {
			changeTab() {
				this.$emit('changeTab', {
					digitalTab: this.tab
				})
			}
		}
	};
</script>

<style lang="less">
	.section_menu {
		position: fixed;
		top: 0;
		width: 100%;
		background: none;
		margin: 0;
		z-index: 50;
		padding-left: 0;
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
			background: rgba(40, 12, 89, 1);
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
	@media (max-width: 768px) {
		.section_menu {
			background: rgba(40, 12, 89, 1);

			.navbar-light .navbar-toggler-icon {
				background-image: url(../assets/menu.svg)
			}
			.navbar {
				padding-left: 0;
				padding-right: 0;

				.nav-link {
					padding-left: 0 !important;
				}
				#nav-collapse {
					ul.navbar-nav {
						padding: 2em 0;

						button {
							width: 100%;
						}
					}
				}
			}
		}
	}
</style>
