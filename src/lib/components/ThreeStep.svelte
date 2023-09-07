<script lang="ts">
	import { step } from "$lib/scripts/store";
	import BtnNext from "./BtnNext.svelte";
	import FileDropzone from "./FileDropzone.svelte";
</script>

<article>
	<section>
		<div>1— Choose files</div>
		{#if $step === 1}
			<FileDropzone />
			<BtnNext />
		{/if}
	</section>
	<section>
		<div>2— Select chart type</div>
		{#if $step === 2}
			<BtnNext />
		{/if}
	</section>
	<section>
		<div>3— Visualize and/or export!</div>
	</section>
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
