const template = `
	<h2>A A AA A</h2>
	<p>Count : {{state.count}}</p>
`;

const { ref } = Vue;
const componentA = {
	template: template,
	setup() {
		const state = ref({
			count: 0
		});

		return { state };
	}
};

export { componentA };