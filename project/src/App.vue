<template>
	<div id="wrapper">
		<section_menu />
	</div>
</template>

<script>
	import Vue from 'vue';
	import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

	import 'bootstrap/dist/css/bootstrap.css';
	import 'bootstrap-vue/dist/bootstrap-vue.css';

	Vue.use(BootstrapVue);
	Vue.use(BootstrapVueIcons);
	import section_menu from './components/section_menu.vue';

	export default {
		name: 'App',
		components: {
			section_menu,
		},
	};
</script>

<style lang="less">
	#wrapper {
	}
</style>
