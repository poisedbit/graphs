<script lang="ts">
	import FileItem from "./FileItem.svelte";

	export let id: string | undefined = undefined;
	export let items: File[] = [];
</script>

<div {id} class="file-viewer">
	{#each items as item}
		<FileItem bind:item />
	{/each}
</div>

<style lang="sass">
	div
		width: 100%
		height: inherit
		overflow: scroll
		display: flex
		flex-wrap: wrap
		align-items: center
		justify-content: center
		gap: 0.5rem
</style>
