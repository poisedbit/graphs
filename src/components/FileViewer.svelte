<script lang="ts">
	import "$style/file-viewer.scss";
	import { afterUpdate } from "svelte";
	import FileItem from "./FileItem.svelte";

	export let id: string | undefined = undefined;
	export let center_content: boolean = false;
	export let items: File[] = [];

	let self: HTMLDivElement;

	$: style = center_content ? "justify-content: safe center;" : undefined;

	afterUpdate(() => {
		if (self.scrollHeight && self.scrollHeight > self.clientHeight)
			self.style.width = `${self.offsetWidth + 5}px`;
	});
</script>

<div {id} class="file-viewer" {style} bind:this={self}>
	<ul class="file-viewer__list" {style}>
		{#each items as item}
			<FileItem bind:item />
		{/each}
	</ul>
</div>
