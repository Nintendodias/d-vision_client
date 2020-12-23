<template>
	<section class="section_start">
		<div id="container_bg">
			<div class="item-bg" data-bg="1"></div>
			<div class="item-bg" data-bg="2"></div>
			<div class="item-bg" data-bg="3"></div>
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
						<h1 class="text-white text-center">
							Мы знаем, что делает фарма
						</h1>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: 'section_start',
		props: {
			msg: String,
		},
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	.section_start {
		min-height: 100vh;
		display: flex;
		align-items: center;
		background: linear-gradient(
			134.41deg,
			#e07e94 -5.96%,
			#2f0078 16.04%,
			#2f0078 45.53%,
			#2f0078 77.82%,
			#451ab2 100%
		);
		img {
			margin-bottom: 2em;
		}
		#container_bg {
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			overflow: hidden;
			animation: animatedBlocks 2s 2s both;

			.rainbow-line {
				position: absolute;
				width: 3px;
				background: linear-gradient(to bottom, #f6df0b, #aa2ecc, #f7017a);
				transform: rotate(45deg);

				&[data-rainbow='1'] {
					left: 7%;
					top: 30px;
					height: 20vh;
				}
				&[data-rainbow='2'] {
					left: 24%;
					top: 154px;
					height: 60vh;
				}
				&[data-rainbow='3'] {
					left: 27%;
					top: 447px;
					height: 30vh;
				}
				&[data-rainbow='4'] {
					right: 44%;
					top: 268px;
					height: 67vh;
				}
				&[data-rainbow='5'] {
					right: 0;
					height: 100vh;
					top: 139px;
				}
			}
			.item-bg {
				position: absolute;
				width: 150px;
				border-radius: 80px;
				height: 100vh;
				background: linear-gradient(to bottom, #2f0078, #4256fe);
				transform: rotate(45deg);

				&[data-bg='1'] {
					left: 10%;
					top: 0;
				}
				&[data-bg='2'] {
					left: 40%;
					top: 150px;
				}
				&[data-bg='3'] {
					right: 0;
					top: -100px;
				}
				@keyframes animatedBlocks {
					0% {
						height: 0%;
					}
					100% {
						height: 100%;
					}
				}
			}
		}
	}
</style>
