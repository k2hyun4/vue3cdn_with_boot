import { componentA } from "./component-a.js";
import { componentB } from "./component-b.js";

const { ref } = Vue;

Vue.createApp({
	setup() {
		const state = ref({
			message: '헬로 월드!'
		});

		return { state };
	}
})
	.component('tm-a', componentA)
	.component('tm-b', componentB)
	.mount('#main');