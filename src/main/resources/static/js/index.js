import { componentA } from "./component-a.js";
import { componentB } from "./component-b.js";

const { ref } = Vue;

const { createRouter, createWebHistory, createWebHashHistory, createMemoryHistory } = VueRouter;
const routes = [
	{
		path: '/',
		name: 'Home',
		component: componentA, // 동적 import
	},
	{
		path: '/about',
		name: 'About',
		component: componentB,
	},
];

const router = createRouter({
	history: createWebHistory(),
	hash: createWebHashHistory(),
	abstract: createMemoryHistory(),
	routes: routes,
})

const mainVue = Vue.createApp({
	setup() {
		const state = ref({
			message: '헬로 월드!'
		});

		return { state };
	}
});

mainVue.use(router)
	.mount('#main');