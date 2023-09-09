<script lang="ts">
	import FirstStep from "./graphing-tool/FirstStep.svelte";
	import Step from "./graphing-tool/Step.svelte";

	let pace: 0 | 1 | 2 = 0;
</script>

<article>
	<Step active={!pace ? true : false} bind:pace>
		<FirstStep />
	</Step>
	<Step active={pace === 1 ? true : false} bind:pace>
		<span>2— Select chart type</span>
	</Step>
	<Step active={pace === 2 ? true : false} bind:pace>
		<span>3— Visualize and/or export!</span>
	</Step>
</article>

<style lang="sass">
	article
		width: auto
		height: 100%
		display: flex
</style>
