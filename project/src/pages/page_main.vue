<template>
	<div id="page_main">
		<section_start />
		<section_about />
		<section_wedo />
		<section_slider />
		<section_analytic />
		<section_pr />
		<section_digitalSchool :digitalTab="digitalTab" />
	</div>
</template>

<script>
	import section_start from '../components/section_start.vue';
	import section_about from '../components/section_about.vue';
	import section_wedo from '../components/section_wedo.vue';
	import section_analytic from '../components/section_analytic.vue';
	import section_pr from '../components/section_pr.vue';
	import section_digitalSchool from '../components/section_digitalSchool.vue';
	import section_slider from '../components/section_slider.vue';

	export default {
		name: 'page_main',
		props: ['digitalTab'],
		components: {
			section_start,
			section_about,
			section_wedo,
			section_slider,
			section_analytic,
			section_pr,
			section_digitalSchool,
		},
		mounted() {
			const observer = new IntersectionObserver(
				(entries) => {
					entries.forEach(({ isIntersecting, target }) => {
						if (!isIntersecting) {
							return;
						}
						target.classList.add('_visible');
					});
				},
				{
					threshold: 0.3,
				},
			);
			const sections = document.querySelectorAll('section');

			sections.forEach((section) => observer.observe(section));
		},
	};
</script>
