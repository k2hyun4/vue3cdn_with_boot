const template = `
	<p>B</p>
    <p>b</p>
    <p>비</p>
`;
const { onMounted, onUpdated } = Vue;

const componentB = {
	template: template,
	setup() {
		onMounted(() => console.log('[componentB] onMounted'));
		onUpdated(() => console.log('[componentB] onUpdated'));
	},
	created() {
		console.log('[componentB] created');
	}
};

export { componentB };