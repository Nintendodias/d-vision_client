<template>
	<section class="section_slider">
		<carousel id="carousel" :dots='false' :nav="false" :center='true' :responsive="{0:{items:1},600:{items:3,nav:true}}" :autoplaySpeed='20' :margin="40" class="animation _type_slideInRight" data-duration="1"
							data-delay="1">
			<div class="slider__item">
				<img src="../assets/slider_1.png" alt="" />
				<div class="slider__text">
					<p class="title _md text-margin text-white">
						Медийные форматы
					</p>
					<p class="text-white text-margin">
						Баннеры, рассылки, фулскрины
					</p>
				</div>
			</div>
			<div class="slider__item">
				<img src="../assets/slider_2.png" alt="" />
				<div class="slider__text">
					<p class="title _md text-margin text-white">
						Сайты любой сложности
					</p>
					<p class="text-white text-margin">
						От лендингов до платформ
					</p>
				</div>
			</div>
			<div class="slider__item">
				<img src="../assets/slider_3.png" alt="" />
				<div class="slider__text">
					<p class="title _md text-margin text-white">
						CLM презентации
					</p>
					<p class="text-white text-margin">
						Результативные и яркие. Простые и многоуровневые с интерактивом на приеме.
					</p>
				</div>
			</div>
			<div class="slider__item">
				<img src="../assets/slider_5.png" alt="" />
				<div class="slider__text">
					<p class="title _md text-margin text-white">
						Видео контент
					</p>
					<p class="text-white text-margin">
						3D анимация, съемки KOL, скетч-ролики
					</p>
				</div>
			</div>
			<div class="slider__item">
				<img src="../assets/slider_4.png" alt="" />
				<div class="slider__text">
					<p class="title _md text-margin text-white">
						Чат-боты
					</p>
					<p class="text-white text-margin">
						Создаем боты в мессенджерах и соцсетях
					</p>
				</div>
			</div>
			<div class="slider__item">
				<div id="slider__button">
					<div>
						<img src="../assets/arrow_3.png" alt="">
						<p class="text-white">
							Станьте нашим клиентом и ваш проект тоже будет здесь.
						</p>
						<p class="text-pink text-semi">
							Это просто.
						</p>
					</div>
				</div>
			</div>
		</carousel>
		
	</section>
</template>

<script>
	import carousel from 'vue-owl-carousel';
	export default {
		name: 'section_slider',
		props: {
			msg: String,
		},
		components: { carousel },
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
	.section_slider {
		padding-bottom: 2em;
		
		#carousel {
			position: relative;

			#slider__button {
				height: 275px;
				width: 100%;
				background: #200E50;
				transition: 1s;
				display: flex;
				align-items: center;
				justify-content: flex-start;
				padding: 2em;
				cursor: pointer;

				img {
					width: auto;
					margin-bottom: 1em;
				}

				&:hover {
					background: var(--color-white);

					p:nth-child(2) {
						transition: 1s;
						color: #36A7C0 !important;
					}
				}
			}

			&:before, &:after {
				content: 'Недавние работы';
				display: inline;
				color: var(--color-blue);
				font-size: 90px;
				font-weight: 600;
				position: absolute;
				top: 0;
				left: 0;
				transform: translateY(-60%)
			}
			&:before {
				z-index: 100;
			}
			&:after {
				z-index: 0;
			}
			.owl-stage div.owl-item:nth-child(2n) {
					z-index: 200;
			}

			margin-top: -3em;
			.owl-nav {
				display: none !important;
			}
			.slider__item {
				&>img {
					height: 275px;
					object-fit: cover;
					margin-bottom: 1em;
				}
			}
		}
	}
</style>
