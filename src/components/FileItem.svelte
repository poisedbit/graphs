<script lang="ts">
	import { createEventDispatcher } from "svelte";
	import { fmt_byte_size } from "$lib/utils";
	import "$style/file-item.scss";

	export let id: string | undefined = undefined;
	export let item: File;

	let self: HTMLDivElement;

	const dispatch = createEventDispatcher<{
		del: { file: File; node: HTMLDivElement };
	}>();
	const del = () => dispatch("del", { file: item, node: self });
</script>

<div {id} class="file-item" bind:this={self}>
	<span class="file-item__name">{item.name}</span>
	<span class="file-item__size">{fmt_byte_size(item.size)}</span>
	<button class="file-item__btn-del" type="button" on:click={del} />
</div>

<style lang="sass">
	.file-item
		border: 1px solid black

		&__btn-del
			background-color: grey
</style>
