<template>
	<section class="section_slider">
		<div class="grid">
			<div class="section__content">
				<div class="grid__row">
					<div class="grid__col _lg_12">
						<h3 class="text-white animation _type_slideInLeft" data-duration=".5" data-delay="0.5">
							<span class="text-blue">Стратегический</span> продакшен
						</h3>
					</div>
				</div>
			</div>
		</div>
		<div class="section__content ">
			<carousel
				id="carousel"
				:dots="true"
				:nav="false"
				:center="true"
				:responsive="{ 0: { items: 1 }, 600: { items: 3, nav: true } }"
				:margin="40"
				class="animation _type_slideInRight"
				data-duration="1"
				data-delay="1"
			>
				<div class="slider__item">
					<img src="../assets/slider_1.png" alt="" />
					<div class="slider__text">
						<p class="title _md text-bold text-margin text-pink">
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
						<p class="title _md text-bold text-margin text-pink">
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
						<p class="title _md text-bold text-margin text-pink">
							CLM презентации
						</p>
						<p class="text-white text-margin">
					Простые и многоуровневые с интерактивом на приеме.
						</p>
					</div>
				</div>
				<div class="slider__item">
					<img src="../assets/slider_5.png" alt="" />
					<div class="slider__text">
						<p class="title _md text-bold text-margin text-pink">
							Чат-боты
						</p>
						<p class="text-white text-margin">
							Создаем боты в мессенджерах и соцсетях
						</p>
					</div>
				</div>
				<div class="slider__item">
					<img src="../assets/slider_4.png" alt="" />
					<div class="slider__text">
						<p class="title _md text-bold text-margin text-pink">
							Видео контент
						</p>
						<p class="text-white text-margin">
							3D анимация, съемки KOL, скетч-ролики
						</p>
					</div>
				</div>
				<div class="slider__item" v-scroll-to="'.section_footer'">
					<div id="slider__button">
						<div>
							<img src="../assets/arrow_3.png" alt="" />
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
		</div>
	</section>
</template>

<script>
	import carousel from 'vue-owl-carousel';

	export default {
		name: 'section_slider',
		components: { carousel },
	};
</script>

<style lang="less">
	.section_slider {
		padding-bottom: 2em;

		#carousel {
			position: relative;
			margin-top: 2em;

			.owl-dots span {
				background: #7774ec;
				transition: 1s;
				box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
			}
			.owl-dots .owl-dot.active span {
				background: #ec409d;
				transform: scale(1.5);
			}
			.owl-nav {
				height: 38px;
				margin-top: 2em;

				.owl-prev,
				.owl-next {
					color: transparent;
					padding: 0;
					position: absolute;
					width: 90px;
					height: 55.77px;
					background: url(../assets/arrow_slider.png) center right / contain no-repeat,
						url(../assets/arrow_slider_2.png) center right 30% no-repeat;
					top: 0;
					left: 50%;
					transform: translate(-222%, -39%);
				}
				.owl-next {
					transform: translate(222%, -39%) rotate(180deg);
					left: auto;
					right: 50%;
				}
			}
			.owl-dots {
				margin-top: -2em;
				pointer-events: none;
			}
			#slider__button {
				height: 275px;
				width: 100%;
				background: #200e50;
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
						color: #36a7c0 !important;
					}
				}
			}

			.owl-stage div.owl-item:nth-child(2n) {
				z-index: 200;
			}

			.slider__item {
				& > img {
					height: 275px;
					object-fit: contain;
					margin-bottom: 1em;
				}
			}
		}
	}
	@media (max-width: 768px) {
		.owl-dots {
			margin-top: 1em !important;
		}
		.owl-item {
			padding: 0 1em;
		}
	}
</style>
