const { ref } = Vue;

Vue.createApp({
	setup() {
		const state = ref({
			message: '헬로 월드!'
		});

		return { state };
	}
}).mount('#main');