<script lang="ts">
	import BtnNext from "./components/BtnNext.svelte";
	import FilePicker from "./components/FilePicker.svelte";

	let step: number = 0;
</script>

<article>
	{#if !step}
		<section>
			<div>1— Choose files</div>
			<FilePicker />
			<BtnNext bind:step />
		</section>
	{:else if step === 1}
		<section>
			<div>2— Select chart type</div>
			<BtnNext bind:step />
		</section>
	{:else if step === 2}
		<section>
			<div>3— Visualize and/or export!</div>
		</section>
	{/if}
</article>

<style lang="scss">
	article {
		width: auto;
		display: flex;
		flex-direction: column;
	}
</style>
