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
						<form action="#" class="wrap_container">
							<input type="button" v-for="specialty in specialties" :key="specialty.id" @click="currentSpetialty = specialty.name" class="wrap_item" :value="specialty.name">
						</form>
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
							<form action="#" class="wrap_container">
								<input type='button' v-for='nosology in nosologies' :key="nosology.id" href="#" @click="currentNosology = nosology.name" class="wrap_item" :value="nosology.name">
							</form>
						</div>
					</div>
				</div>
			</div>
			<div class="section__content">
				<div class="grid__row">
					<div class="grid__col _lg_12">
						<div class="projects_container">
							<a :href="project.link" target="_blank" class="projects_item" v-for="(project, index) in filterProjects" :key="index">
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
	import specialties from "../js/specialty";
	import nosologies from "../js/nosology";

	export default {
		name: 'section_projects',
		data() {
			return {
				projects,
				currentSpetialty: 0,
				currentNosology: 0,
			};
		},
		computed: {
			specialties() {
				return specialties;
			},
			nosologies() {
				return nosologies;
			},
			filterProjects() {
				let filteredProjects = projects;
				
				if (this.currentSpetialty != 0) {
					filteredProjects = filteredProjects.filter(project => project.specialty === this.currentSpetialty)
				}
				if (this.currentNosology != 0) {
					filteredProjects = filteredProjects.filter(project => project.nosology === this.currentNosology)
				}

				return filteredProjects;
			}
		},
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
			input.wrap_item {
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
				border: none !important;

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
