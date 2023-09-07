<script lang="ts">
	import { spreadsheet_files } from "$lib/scripts/store";
	import FileItem from "./FileItem.svelte";

	let files: FileList;

	$: if (files) {
		spreadsheet_files.update(arr =>
			[...arr, ...Array.from(files)].filter(
				(file, index, self) =>
					index ===
					self.findIndex(
						f =>
							f.name === file.name &&
							f.size === file.size &&
							f.type === file.type &&
							f.lastModified === file.lastModified
					)
			)
		);

		console.log($spreadsheet_files);
	}

	$: files_len = $spreadsheet_files.length;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="file-dz"
	role="generic"
	on:dragover={e => e.preventDefault()}
	on:drop={e => {
		e.preventDefault();

		if (e.dataTransfer && e.dataTransfer.files.length) {
			files = e.dataTransfer.files;
		}
	}}
>
	{#if files_len}
		<div class="file-dz__item-container">
			{#each $spreadsheet_files as item}
				<FileItem {item} />
			{/each}
		</div>
	{/if}
	<div class="btn-container">
		<label class="btn-pick">
			<input type="file" multiple hidden bind:files />
			{!files_len ? "Pick files" : "Add more"}
		</label>
	</div>
</div>

<style lang="scss">
	.file-dz {
		width: auto;
		height: 15rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.file-dz__item-container {
		width: 100%;
		min-height: 85%;
	}

	.btn-container {
		width: 100%;
		height: 15%;
	}

	.btn-pick {
		border: 1px solid black;
		cursor: pointer;
	}
</style>
