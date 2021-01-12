<template>
	<section :style="{ background: gradient }" class="section_start" @mousemove="animateSectionStart">
		<div id="container_bg">
			<div class="item-bg" data-bg="1"></div>
			<div class="item-bg" data-bg="2"></div>
			<div class="item-bg" data-bg="3"></div>
			<div class="item-bg" data-bg="4"></div>
			<div class="rainbow-line" data-rainbow="1"></div>
			<div class="rainbow-line" data-rainbow="2"></div>
			<div class="rainbow-line" data-rainbow="3"></div>
			<div class="rainbow-line" data-rainbow="4"></div>
			<div class="rainbow-line" data-rainbow="5"></div>
		</div>
		<div class="grid">
			<div class="section__content">
				<div class="grid__row">
					<div class="grid__col _lg_12">
						<img class="items-center" src="../assets/logo_d-vision_lg.png" alt="" />
						<h2 class="text-white text-center">
							<span class='text-blue'>Мы знаем,</span> что делает фарма
						</h2>
					</div>
				</div>
			</div>
			<div class="section__content">
				<div class="grid__row _lg_content_center">
					<div class="grid__col _lg_1">
						<button id="next"></button>
					</div>
				</div>
			</div>
		</div>
		<img src="../assets/bg_line.png" alt="" id="line">
	</section>
</template>

<script>
	export default {
		name: 'section_start',
		props: {
			msg: String,
		},
		data() {
			return {
				gradient:
					'linear-gradient(134.41deg,#e07e94 -5.96%,#2f0078 16.04%,#2f0078 45.53%,#2f0078 77.82%,#451ab2 100%)',
			};
		},
		methods: {
			animateSectionStart: function(event) {
				let count = event.clientX / 40;
				this.gradient = `linear-gradient(${134.41 - count}deg, #E07E94 1%,#D97993 3%,#AC598C 5%, #863E86 7%, #662781 10%, #4E167D, #3D0A7A, #320279, #2F0078, #30037C, #310A88, #34189D, #382AB9, #3D41DE, #4256FE)`;
			},
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	.section_start {
		min-height: 100vh;
		display: flex;
		align-items: center;
		background: none;
		padding-top: 10em;
		padding-bottom: 5em;

		img {
			margin-bottom: 2em;
		}
		#line {
			position: absolute;
			bottom: -2em;
			left: 0;
			width: 100%;
		}
		#next {
			background: var(--color-white);
			box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
			border-radius: 60px;
			height: 78px;
			width: 80%;
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			margin: 0 auto;

			&:after {
				content: '';
				width: 17px;
				height: 8px;
				background: url(../assets/arrow.png) center / contain no-repeat;
				transform: rotate(90deg);
			}
		}
		#container_bg {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			overflow: hidden;

			.rainbow-line {
				position: absolute;
				width: 4px;
				background: linear-gradient(to top, #F6DF0B, #AA2ECC, #B925BC, #E10E92, #F7017A);
				opacity: .5;
				transform: rotate(45deg);
				animation: rainbow 1s 3s infinite both;
				animation-name: rainbow;
				animation-duration: 5s;
				animation-iteration-count: infinite;
				animation-fill-mode: both;

				&[data-rainbow='1'] {
					left: 7%;
					top: 30px;
					height: 20vh;
					animation-delay: 2s;
				}
				&[data-rainbow='2'] {
					left: 24%;
					top: 154px;
					height: 60vh;
					animation-delay: 2.2s;
				}
				&[data-rainbow='3'] {
					left: 27%;
					top: 447px;
					height: 30vh;
					animation-delay: 2.1s;
				}
				&[data-rainbow='4'] {
					right: 44%;
					top: 268px;
					height: 67vh;
					animation-delay: 3s;
				}
				&[data-rainbow='5'] {
					right: 0;
					height: 100vh;
					top: 139px;
					animation-delay: 3.5s;
				}

				@keyframes rainbow {
					0% {
						transform: rotate(45deg) translateY(-150vh);
					}
					100% {
						transform: rotate(45deg) translateY(100vh);
					}
				}
			}
			.item-bg {
				position: absolute;
				width: 144px;
				border-radius: 80px;
				height: 100vh;
				background: linear-gradient(to bottom, #2f0078, #4256fe);
				transform: rotate(45deg);
				opacity: 0.5;
				animation: animatedBlocks 2s both;

				&[data-bg='1'] {
					left: 20%;
					top: -350px;
					background: linear-gradient(to top, #783484 0.01%, #2F027B 88.25%);
				}
				&[data-bg='2'] {
					left: 20%;
					top: 50px;
					background: linear-gradient(180deg, #350479 0%, #2F0179 100%);
					box-shadow: 0px 60px 60px rgba(29, 22, 74, 0.59);
				}
				&[data-bg='3'] {
					right: 20%;
					top: -100px;
					background: linear-gradient(180deg, #30037C 0%, #3E159F 100%);
					box-shadow: 0px 50px 60px #200661;
				}
				&[data-bg='4'] {
					right: 20%;
					top: 250px;
					background: linear-gradient(180deg, #4F1DA4 41.15%, #3545DC 100%);
					box-shadow: 0px 50px 60px #200661;
				}
				@keyframes animatedBlocks {
					0% {
						transform: rotate(45deg) translateY(-157vh)
					}
					100% {
						translate: rotate(45deg) translateY(0);
					}
				}
			}
		}
	}
</style>
