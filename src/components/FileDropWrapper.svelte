<script lang="ts">
	export let id: string | undefined = undefined;
	export let files: FileList;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	{id}
	class="file-drop-wrapper"
	style:all="inherit"
	on:dragover|preventDefault
	on:drop|preventDefault={e => {
		if (e.dataTransfer && e.dataTransfer.files.length) {
			files = e.dataTransfer.files;
		}
	}}
>
	<slot />
</div>
