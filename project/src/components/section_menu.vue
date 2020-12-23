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
						<b-nav-item href="#" :active="tab === 1" @click="tab = 1">О нас</b-nav-item>
						<b-nav-item href="#" :active="tab === 2" @click="tab = 2">Наши возможности</b-nav-item>
						<b-nav-item href="#" :active="tab === 3" @click="tab = 3">Галерея проектов</b-nav-item>
						<b-nav-item href="#" :active="tab === 4" @click="tab = 4">Контакты</b-nav-item>
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
<style lang="less" scoped>
	.section_menu {
		position: fixed;
		top: 0;
		width: 100%;
		background: none;
		margin: 0;
		z-index: 50;

		.nav-link {
			transition: 1s;
			color: var(--color-white) !important;

			&.active,
			&:hover {
				color: var(--color-pink) !important;

				&:after {
					content: '';
					display: block;
					width: 0;
					height: 2px;
					background: var(--color-pink);
					animation: rising 1s both;

					@keyframes rising {
						0% {
							width: 0;
						}
						100% {
							width: 100%;
						}
					}
				}
			}
		}
	}
</style>
