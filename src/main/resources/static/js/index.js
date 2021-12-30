const { ref } = Vue;

const componentA = {
	template: '#a-template',
	setup() {
		const state = ref({
			count: 0
		});

		return { state };
	}
};

const componentB = {
	template: '#b-template'
};

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
