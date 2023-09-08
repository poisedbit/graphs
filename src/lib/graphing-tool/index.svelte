<script lang="ts">
	import { step } from "$lib/scripts/store";
	import { step_handler } from "$lib/scripts/store_handlers";
	import { onMount } from "svelte";
	import BtnNext from "./components/BtnNext.svelte";
	import FilePicker from "./components/FilePicker.svelte";

	onMount(() => step_handler.rst());
</script>

<article>
	{#if !$step}
		<section>
			<div>1— Choose files</div>
			<FilePicker />
			<BtnNext />
		</section>
	{:else if $step === 1}
		<section>
			<div>2— Select chart type</div>
			<BtnNext />
		</section>
	{:else if $step === 2}
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

		:not(:last-of-type) {
			margin: 0 0 1.5rem;
		}

		section {
			> :global(*:not(:first-child)) {
				width: 90%;
				margin: 0 5%;
			}
		}
	}
</style>
