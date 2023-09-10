<script lang="ts">
	import FilePickerBtn from "$comps/FilePickerBtn.svelte";
	import FileDropContainer from "$comps/FileDropContainer.svelte";
	import FileViewer from "$comps/FileViewer.svelte";
	import { sheets, sheets_handler } from "$view/stores/sheets";

	let files: FileList;

	$: if (files) {
		sheets_handler.up(files);
	}

	$: f_len = $sheets.length;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<section>
	<span>1— Choose files</span>
	<FileDropContainer bind:files>
		{#if f_len}
			<FileViewer items={$sheets} />
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
