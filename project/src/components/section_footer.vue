<template>
	<section class="section_footer">
		<div class="grid">
			<div class="section__content">
				<div class="grid__row">
					<div class="grid__col _lg_12">
						<p class="title _lg text-blue text-bold animation _type_slideInLeft" data-duration=".5" data-delay=".5">
							Получить свою стратегию:
						</p>
					</div>
				</div>
			</div>
			<div class="section__content">
				<div class="grid__row _lg_items_center">
					<div class="grid__col _lg_2 _sm_12">
						<a href="tel:+79167270601" class="text-white text-center text-content animation _type_slideInLeft" data-duration=".5" data-delay=".5">+7 991 884 86 49</a>
					</div>	
					<div class="grid__col _lg_2 _sm_12">
						<a href="tel:+79689363069" class="text-white text-center animation _type_slideInLeft" data-duration=".5" data-delay="1"></a>
					</div>
					<div class="grid__col _lg_3 _sm_12">
						<a href="mailto:info@digitvision.ru" class="text-white text-center animation _type_slideInLeft" data-duration=".5" data-delay="1.5">info@digitvision.ru</a>
					</div>
					<div class="grid__col _lg_5 _sm_12">
					<a href="https://t.me/DigitalVisionBot" class="text-neon feedback animation _type_slideInUp" data-duration=".5" data-delay="2"><span>Оставить запрос в telegram-боте</span></a> 
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'section_footer',
	};
</script>

<style lang="less">
	.section_footer {
		background:  url(../assets/bg_bottom.png) center top /cover no-repeat;
		
		.feedback {
			width: 100%;

			&:after {
				content: '';
				width: 20.72px;
				height: 17.53px;
				display: block;
				background: url(../assets/telegram.svg);
				position: absolute;
				top: 50%;
				right: 0;
				transform: translate(-30px, -50%);
			}
		}

		a {
			text-align: left !important;
		}
	}
	@media (max-width: 768px) {
		.section_footer {
			padding-top: 5em;
			.feedback {
				font-size:14px;
				&:after {
					display: none;
				}
			}
		}
	}
</style>
