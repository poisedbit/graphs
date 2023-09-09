<script lang="ts">
	import FilePicker from "./components/FilePicker.svelte";
	import NavBtns from "./components/NavBtns.svelte";
	import Step from "./components/Step.svelte";

	let step: 0 | 1 | 2 = 0;
</script>

<article>
	<Step active={!step ? true : false}>
		<div>1— Choose files</div>
		<FilePicker />
		<NavBtns bind:step />
	</Step>
	<Step active={step === 1 ? true : false}>
		<div>2— Select chart type</div>
		<NavBtns bind:step />
	</Step>
	<Step active={step === 2 ? true : false}>
		<div>3— Visualize and/or export!</div>
		<NavBtns bind:step />
	</Step>
</article>

<style lang="scss">
	article {
		width: auto;
		height: 100%;
		display: flex;
	}
</style>
