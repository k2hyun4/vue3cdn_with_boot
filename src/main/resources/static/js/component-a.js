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

export { componentA };