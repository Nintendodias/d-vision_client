<template>
	<section class="section_projects">
		<div class="grid">
			<div class="section__content">
				<div class="grid__row">
					<div class="grid__col _lg_12">
						<p class="number text-white"><span class="text-blue">Наши</span> проекты</p>
					</div>
				</div>
			</div>
			<div class="section__content">
				<div class="grid__row _lg_items_center">
					<div class="grid__col _lg_2">
						<p class="text-pink title _md">
							Площадки:
						</p>
					</div>
					<div class="grid__col _lg_7">
						<div class="wrap_container">
							<img src="../assets/dnr.svg" alt="" class="wrap_item">
							<img src="../assets/bionicaMedia.svg" alt="" class="wrap_item">
							<img src="../assets/book.svg" alt="" class="wrap_item">
						</div>
					</div>
				</div>
			</div>
			<div class="section__content">
				<div class="grid__row _lg_items_center">
					<div class="grid__col _lg_2">
						<p class="text-blue title _md">
							Аудитория:
						</p>
					</div>
					<div class="grid__col _lg_10">
						<div class="wrap_container">
							<a href="#" @click='onFilterSpecialty' class="wrap_item">Неврологи</a>
							<a href="#" data-specialty="" @click='onFilterSpecialty' class="wrap_item">Кардиологи</a>
							<a href="#" data-specialty="" @click='onFilterSpecialty' class="wrap_item">Терапевты</a>
							<a href="#" data-specialty="" @click='onFilterSpecialty' class="wrap_item">Онкологи</a>
							<a href="#" data-specialty="" @click='onFilterSpecialty' class="wrap_item">Гинекологи</a>
							<a href="#" data-specialty="" @click='onFilterSpecialty' class="wrap_item">Потребители</a>
						</div>
					</div>
				</div>
			</div>
			<div class="section__content">
				<div class="grid__row _lg_items_center">
						<div class="grid__col _lg_2">
						<p class="text-blue title _md">
							Нозология:
						</p>
					</div>
					<div class="grid__col _lg_10">
						<div class="wrap_container">
							<a href="#" class="wrap_item">ХСН</a>
							<a href="#" class="wrap_item">НПВС</a>
							<a href="#" class="wrap_item">Невроз</a>
							<a href="#" class="wrap_item">Вульвовагинальный кандидоз</a>
							<a href="#" class="wrap_item">Климакс</a>
							<a href="#" class="wrap_item">КОК</a>
						</div>
					</div>
				</div>
			</div>
			<div class="section__content">
				<div class="grid__row">
					<div class="grid__col _lg_12">
						<div class="projects_container">
							<a :href="project.link" target="_blank" class="projects_item" v-for="(project, index) in projects" :key="index">
								<img :src="project.img" alt="">
								<p class="title _md text-white text-semi text-margin">
									{{project.name}}
								</p>
								<p class="text-white text-magrin">
									{{project.description}}
								</p>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import projects from "../js/projects";
	export default {
		name: 'section_projects',
		props: {
			msg: String,
		},
		data() {
			return {
				projects
			};
		},
		methods: {
			onFilterSpecialty() {
				console.log('asd')
			}
		}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	.section_projects {
		.wrap_container {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			flex-wrap: wrap;

			.wrap_item {
				&+.wrap_item {
					margin-left: 1em;
				}
			}
			a.wrap_item {
				color: #A89ED9 !important;
				display: flex;
				align-items: center;
				justify-content: center;
				width: auto;
				height: 48px;
				padding: 0 1em;
				background: #493F8B;
				border-radius: 10px;
				transition: .5s;

				&:hover {
					background: #EC409D;
					color: var(--color-white) !important;
				}
			}
		}
		.projects_container {
			display: flex;
			align-items: flex-start;
			justify-content: space-between;
			flex-wrap: wrap;

			.projects_item {
				width: 350px;
				cursor: pointer;
				margin-bottom: 2em;

				&>img {
					width: 350px;
					height: 330px;
					object-fit: cover;
					margin-bottom: 1em;
				}
			}
		}
	}
</style>
