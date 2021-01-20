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
							<img src="../assets/dnr.svg" @click="onFilterPlayground('dnr')" alt="" class="wrap_item">
							<img src="../assets/bionicaMedia.svg" @click="onFilterPlayground('bionica')" alt="" class="wrap_item">
							<img src="../assets/book.svg" @click="onFilterPlayground('book')" alt="" class="wrap_item">
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
							<a href="#" class="wrap_item">Неврологи</a>
							<a href="#" class="wrap_item">Кардиологи</a>
							<a href="#" class="wrap_item">Терапевты</a>
							<a href="#" class="wrap_item">Онкологи</a>
							<a href="#" class="wrap_item">Гинекологи</a>
							<a href="#" class="wrap_item">Потребители</a>
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
							<a :href="project.link" class="projects_item" v-for="project in projects" :key="project.name">
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
	export default {
		name: 'section_projects',
		props: {
			msg: String,
		},
		data() {
			return {
				projects: [
					{
						playground: 'dnr',
						specialty: 'Терапевты',
						nosology: 'Климакс',
						img: 'project_1.png',
						name: 'Целебрекс',
						description: 'Интерактивная программа',
						link: '#test_1'
					},
					{
						playground: 'bionica',
						specialty: 'Неврологи',
						nosology: 'НПВС',
						img: 'project_2.png',
						name: 'Аэртал',
						description: 'Видеоролик',
						link: '#test_2'
					},
					{
						playground: 'book',
						specialty: 'Гинекологи',
						nosology: 'ХСН',
						img: 'project_3.png',
						name: 'Китруда',
						description: 'Лендинги, баннерные форматы',
						link: '#test_3'
					},
				],
			};
		},
		methods: {
			onFilterPlayground(type) {
				this.projects.forEach(project => console.log(project.playground == type));
				console.log(type)
				console.log(this.projects.filter(project => project.playground == type));
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
				cursor: pointer;
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
			align-items: center;
			justify-content: flex-start;
			flex-wrap: wrap;

			.projects_item {
				background: black;
				width: 350px;
				cursor: pointer;

				&+.projects_item {
					margin-left: 1em;
				}
			}
		}
	}
</style>
