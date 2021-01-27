<template>
	<section class="section_footer">
		<div class="grid">
			<div class="section__content">
				<div class="grid__row">
					<div class="grid__col _lg_12">
						<p class="title _lg text-blue text-bold">
							Хотите узнать, <br>как мы работаем?
						</p>
					</div>
				</div>
			</div>
			<div class="section__content">
				<div class="grid__row _lg_items_center">
					<div class="grid__col _lg_2 _sm_12">
						<a href="tel:+79167270601" class="text-white text-center text-content">+7 916 727 06 01</a>
					</div>	
					<div class="grid__col _lg_2 _sm_12">
						<a href="tel:+79689363069" class="text-white text-center">+7 968 936 30 69</a>
					</div>
					<div class="grid__col _lg_3 _sm_12">
						<a href="mailto:info@digitvision.ru" class="text-white text-center">info@digitvision.ru</a>
					</div>
					<div class="grid__col _lg_5 _sm_12">
						<button class="text-neon feedback"><span>Оставить запрос в telegram-боте</span></button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'section_footer',
		props: {
			msg: String,
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
