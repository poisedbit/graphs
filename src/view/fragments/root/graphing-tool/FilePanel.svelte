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
<div class="file-panel">
	<FileDropWrapper bind:files>
		<div class="file-panel__inner">
			{#if f_len}
				<FileViewer
					items={[...$sheets]}
					center_content
					on:del={e => sheets_handler.del(e.detail.index)}
				/>
			{/if}
			<div
				class="panel-btns"
				style:justify-content={f_len !== 0 ? "space-between" : "center"}
			>
				<FilePickerBtn multiple bind:files />
				{#if f_len}
					<button
						class="panel-btns__reset"
						type="button"
						on:click={sheets_handler.reset}>Delete all</button
					>
				{/if}
			</div>
		</div>
	</FileDropWrapper>
</div>

<style lang="sass">
	.file-panel
		width: 100%
		height: 100%
		display: flex
		align-items: center
		justify-content: center

		&__inner
			// width: 1035px
			width: 66.375rem + 0.125rem
			height: 39.6875rem
			padding: 1rem
			border: 1px solid black
			display: flex
			flex-direction: column
			align-items: center
			justify-content: center

	.panel-btns
		width: 100%
		padding: 2.5rem
		display: flex
		gap: 1rem

		:global(*)
			border: 1px solid black
</style>
