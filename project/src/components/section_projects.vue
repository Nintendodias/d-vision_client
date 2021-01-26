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
							<img src="../assets/dnr.svg" alt="" class="wrap_item" />
							<img src="../assets/bionicaMedia.svg" alt="" class="wrap_item" />
							<img src="../assets/book.svg" alt="" class="wrap_item" />
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
						<form action="#" class="wrap_container" id="auditory">
							<input
								type="button"
								v-for="specialty in specialties"
								:key="specialty.id"
								@click="changeSpecialtyArr($event); changeClass($event)"
								class="wrap_item _active"
								:value="specialty.name"
							/>
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
						<form action="#" class="wrap_container">
							<input
								type="button"
								v-for="nosology in nosologies"
								:key="nosology.id"
								href="#"
								@click="changeNosologyArr($event); changeClass($event)"
								class="wrap_item _active"
								:value="nosology.name"
							/>
						</form>
					</div>
				</div>
			</div>
			<div class="section__content">
				<div class="grid__row">
					<div class="grid__col _lg_12">
						<div class="projects_container">
							<a
								:href="project.link"
								target="_blank"
								class="projects_item"
								v-for="(project, index) in filterProjects"
								:key="index"
							>
								<img :src="project.img" alt="" />
								<p class="title _md text-white text-semi text-margin">
									{{ project.name }}
								</p>
								<p class="text-white text-magrin">
									{{ project.description }}
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
	import projects from '../js/projects';
	import specialties from '../js/specialty';
	import nosologies from '../js/nosology';

	export default {
		name: 'section_projects',
		data() {
			return {
				projects,
				specialtyArr: [
					'Неврологи',
					'Кардиологи',
					'Терапевты',
					'Онкологи',
					'Гинекологи',
					'Потребители',
				],
				nosologyArr: [
					'НПВС',
					'Ноотроп',
					'ХСН',
					'СС-риски',
					'Рак разного генома',
					'Вирусные заболевания',
					'Кандидоз',
					'КОК',
					'Гигиена',
					'Здоровье полости рта',
					'Витамины',
				],
			};
		},
		methods: {
			changeClass(event) {
				event.target.classList.toggle('_active');
			},
			changeSpecialtyArr(event) {
				let isActive = event.target.classList.contains('_active');
				let value = event.target.value;

				if (isActive) {
					let index = this.specialtyArr.indexOf(value);
					this.specialtyArr.splice(index, 1);
				} else {
					this.specialtyArr.push(value)
				}
			},
			changeNosologyArr(event) {
				let isActive = event.target.classList.contains('_active');
				let value = event.target.value;

				if (isActive) {
					let index = this.specialtyArr.indexOf(value);
					this.specialtyArr.splice(index, 1);
				} else {
					this.specialtyArr.push(value)
				}
			}
		},
		computed: {
			specialties() {
				return specialties;
			},
			nosologies() {
				return nosologies;
			},
			filterProjects() {
				const filterBySpecialty = (project) =>
					this.specialtyArr.some((specialty) => project.specialty === specialty);

				const filterByNosology = (project) =>
					this.nosologyArr.some((nosology) => project.nosology === nosology);

				const filteredProjects = () => {
					return projects.filter((project) => filterBySpecialty(project) && filterByNosology(project));
				};
				
				console.log(filteredProjects())
				return filteredProjects();
			},
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
			overflow-y: hidden;
			overflow-x: auto;

			.wrap_item {
				& + .wrap_item {
					margin-left: 1em;
				}
			}
			input.wrap_item {
				color: #a89ed9 !important;
				display: flex;
				align-items: center;
				justify-content: center;
				width: auto;
				height: 48px;
				padding: 0 1em;
				background: #493f8b;
				border-radius: 10px;
				transition: 0.5s;
				border: none !important;

				&:hover {
					background: #ec409d;
					color: var(--color-white) !important;
				}
				&._active {
					background: #ec409d;
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

				& > img {
					width: 350px;
					height: 330px;
					object-fit: cover;
					margin-bottom: 1em;
				}
			}
		}
	}
</style>
