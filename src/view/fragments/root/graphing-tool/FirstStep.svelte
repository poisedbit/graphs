<script lang="ts">
	import FileDropWrapper from "$comps/FileDropWrapper.svelte";
	import FilePickerBtn from "$comps/FilePickerBtn.svelte";
	import FileViewer from "$comps/FileViewer.svelte";
	import { sheets, sheets_handler } from "$view/stores/sheets";

	let files: FileList;

	$: if (files) {
		sheets_handler.up(files);
	}

	$: f_len = $sheets.length;
</script>

<span>1— Choose files</span>
<div class="file-dz">
	<div class="file-dz__inner">
		<FileDropWrapper bind:files>
			{#if f_len}
				<FileViewer items={$sheets} />
			{/if}
			<div
				class="file-dz__btns"
				style:justify-content={f_len !== 0 ? "flex-start" : "center"}
			>
				<FilePickerBtn multiple bind:files />
			</div>
		</FileDropWrapper>
	</div>
</div>

<style lang="sass">
	.file-dz
		width: auto
		height: 100%
		margin: 10% 25%
		border: 1px solid black
		display: flex
		justify-content: center

		&__inner 
			width: 100%
			height: 100%
			display: flex
			justify-content: center
			flex-direction: column

		&__btns
			width: 100%
			height: 15%
			display: flex
			align-items: center
</style>
