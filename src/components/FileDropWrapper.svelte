<script lang="ts">
	export let files: FileList;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	on:dragover|preventDefault
	on:drop|preventDefault={e => {
		if (e.dataTransfer && e.dataTransfer.files.length) {
			files = e.dataTransfer.files;
		}
	}}
>
	<slot />
</div>
