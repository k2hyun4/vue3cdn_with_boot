const template = `
	<p>B</p>
    <p>b</p>
    <p>비</p>
`;
const { onMounted, onUpdated } = Vue;

const componentB = {
	template: template,
	setup() {
		onMounted(() => console.log('[componentA] onMounted'));
		onUpdated(() => console.log('[componentA] onUpdated'));
	}
};

export { componentB };