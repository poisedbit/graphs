<script lang="ts">
	import { fmt_bytes } from "$lib/scripts/utils";

	export let item: File;
</script>

<div class="file-item">
	<span class="file-item__name">{item.name}</span>
	<span class="file-item__size">{fmt_bytes(item.size)}</span>
</div>

<style lang="scss">
	.file-item {
		border: 1px solid black;
	}
</style>
