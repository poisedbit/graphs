<script lang="ts">
	export let id: string = "";
	export let files: FileList;
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	{id}
	on:dragover={e => e.preventDefault()}
	on:drop={e => {
		e.preventDefault();

		if (e.dataTransfer && e.dataTransfer.files.length) {
			files = e.dataTransfer.files;
		}
	}}
>
	<slot />
</div>

<style lang="sass">
	div
		width: 100%
		height: inherit
		display: inherit
		flex: inherit
		flex-direction: inherit
		flex-wrap: inherit
		grid: inherit
		gap: inherit
		align-items: inherit
		justify-content: inherit
</style>
