<script lang="ts">
	import { sprdsht_files_handler } from "$lib/scripts/store_handlers";
	import { sprdsht_files } from "$lib/scripts/store";
	import FileItem from "./FileItem.svelte";

	let files: FileList;

	$: if (files) {
		sprdsht_files_handler.up(files);
	}

	$: f_len = $sprdsht_files.length;
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
	{#if f_len}
		<div class="file-dz__item-container">
			{#each $sprdsht_files as item}
				<FileItem {item} />
			{/each}
		</div>
	{/if}
	<div
		class="btn-container"
		style:justify-content={f_len !== 0 ? "flex-start" : "center"}
	>
		<label class="btn-pick">
			<input type="file" multiple hidden bind:files />
			{!f_len ? "Pick files" : "Add more"}
		</label>
	</div>
</div>

<style lang="scss">
	.file-dz {
		width: auto;
		height: 100%;
		padding: 15%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		div {
			border: 1px solid black;
		}
	}

	.file-dz__item-container {
		width: 100%;
		min-height: 85%;
	}

	.btn-container {
		width: 100%;
		height: 15%;
		display: flex;
		align-items: center;
	}

	.btn-pick {
		height: min-content;
		border: 1px solid black;
		cursor: pointer;
	}
</style>
