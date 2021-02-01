<template>
	<section class="section_analytic">
		<div class="grid">
			<div class="section__content" >
				<div class="grid__row">
					<div class="grid__col _lg_12">
						<p class="title _lg text-white animation _type_slideInLeft" data-duration=".5" data-delay="0.5">
							<span class="text-blue">Настройка аналитики</span> на проекте
							<span class="text-pink">в 2 счета</span>
						</p>
					</div>
				</div>
			</div>
			<div class="section__content" >
				<div class="grid__row _lg_items_center">
					<div class="grid__col _lg_8 _sm_12">
						<p class="text-white text-light animation _type_slideInLeft" data-duration=".5"
							data-delay=".5">
							Мы можем подключить <span class="text-semi"> Google Analytics</span> на любой
							web-проект и <span class="text-semi">настроить метрики,</span> которые необходимо
							отслеживать
						</p>
					</div>
					<div class="grid__col _lg_4 _sm_12">
						<img src="../assets/ga.png" class="animation _type_slideInLeft" data-duration=".5"
							data-delay="1" alt="" />
					</div>
				</div>
			</div>
			<div class="section__content" >
				<div class="grid__row _lg_items_center animation _type_slideInLeft" data-duration=".5"
							data-delay=".5">
					<div class="grid__col _lg_6 _sm_12">
						<div class="item-title">
							<h1 class="text-blue text-bold">1 <span class="number text-transform">этап</span></h1>
							<p class="text-margin text-white title _md">
								Разрабатываем карту с метриками
							</p>
							<p class="text-margin text-white">
								Определяем на проекте, какие метрики требуются проанализировать, описываем названия
								переменных и составляем подробное описание для отслеживания показателей
							</p>
						</div>
					</div>
					<div class="grid__col _lg_6 _sm_12">
						<img src="../assets/analytic_1.png" alt="" />
					</div>
				</div>
			</div>
			<div id="svg-container">
		<svg
			width="645"
			height="324"
			viewBox="0 0 645 324"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			id="line"
		>
			<path
				id="Vector 1"
				d="M32 29.4994C-8.99988 95.5 96.4999 133.999 318 133.999C539.5 133.999 664 249 600 320.999"
				stroke="#4ED9F9"
				stroke-width="3"
				stroke-dasharray="5 5"
			/>
		</svg></div>
			<div class="section__content">
				<div class="grid__row _lg_items_center _sm_reverse_col animation _type_slideInLeft" data-duration=".5" data-delay=".5">
					<div class="grid__col _lg_6 _sm_12">
						<img src="../assets/analytic_2.png" alt="" />
					</div>
					<div class="grid__col _lg_6 _sm_12">
						<div class="item-title">
							<h1 class="text-blue text-bold">2 <span class="number text-transform">этап</span></h1>
							<p class="text-margin text-white title _md">
								Подключаем счетчик к проекту
							</p>
							<p class="text-margin text-white">
								Создаем индивидуальный аккаунт для проекта, тестируем отправку статистики и передаем
								вам права доступа к отслеживанию показателей
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'section_analytic',
	};
</script>

<style lang="less" scoped>
	.section_analytic {
		background: url(../assets/bg_abstrakt_3.png) center left no-repeat, url(../assets/bg_abstrakt_4.png) top right no-repeat, url(../assets/bg_abstrakt_6.png) bottom right no-repeat;
		#svg-container {
			width: 100%;
			height: 250px;
			#line {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
		}
		.item-title {
			position: relative;
			padding: 1em 2em;
			&:before {
				content: '';
				width: 192px;
				height: 192px;
				background: linear-gradient(180deg, #881ca3 0%, rgba(110, 50, 214, 0) 100%);
				position: absolute;
				top: 0;
				left: 0;
				display: block;
				border-radius: 50%;
			}
		}
	}
	@media (max-width: 768px) {
		.section_analytic {
			svg {
				width: 100%
			}
		}
	}
</style>
