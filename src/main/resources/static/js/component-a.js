const template = `
	<h2>A A AA A</h2>
	<p>Count : {{state.count}}</p>
`;

const { ref, onMounted, onUpdated } = Vue;

const componentA = {
	template: template,
	setup() {
		const state = ref({
			count: 0
		});

		onMounted(() => console.log('[componentA] onMounted'));
		onUpdated(() => console.log('[componentA] onUpdated'));

		return { state };
	}
};

export { componentA };