<script lang="ts">
	import FilePickerBtn from "$lib/components/FilePickerBtn.svelte";
	import FileDropContainer from "$lib/components/FileDropContainer.svelte";
	import FileViewer from "$lib/components/FileViewer.svelte";
	import { sprdsht_files } from "$lib/scripts/store";
	import { sprdsht_files_handler } from "$lib/scripts/store_handlers";

	let files: FileList;

	$: if (files) {
		sprdsht_files_handler.up(files);
	}

	$: f_len = $sprdsht_files.length;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<section>
	<span>1— Choose files</span>
	<FileDropContainer bind:files>
		{#if f_len}
			<FileViewer items={$sprdsht_files} />
		{/if}
		<div
			class="btn-container"
			style:justify-content={f_len !== 0 ? "flex-start" : "center"}
		>
			<FilePickerBtn multiple bind:files />
		</div>
	</FileDropContainer>
</section>

<style lang="sass">
	section
		width: auto
		height: 100%
		margin: 15%
		display: flex
		flex-direction: column
		align-items: center
		justify-content: center
		border: 1px solid black

	.btn-container
		width: 100%
		height: 15%
		display: flex
		align-items: center
</style>
