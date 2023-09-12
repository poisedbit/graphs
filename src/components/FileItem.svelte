<script lang="ts">
	import { fmt_bytes } from "$lib/utils";
	import "$style/file-item.scss";

	export let id: string | undefined = undefined;
	export let item: File;
</script>

<div {id} class="file-item">
	<span class="file-item__name">{item.name}</span>
	<span class="file-item__size">{fmt_bytes(item.size)}</span>
</div>

<style lang="sass">
	.file-item
		border: 1px solid black
</style>
