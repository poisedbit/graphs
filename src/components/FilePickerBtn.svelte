<script lang="ts">
	import "$style/file-picker-btn.scss";

	export let label: string = "Add file";
	export let id: string | undefined = undefined;
	export let accept: ReadonlyArray<string> = [];
	export let multiple: boolean = false;
	export let files: FileList;
</script>

<label {id} class="file-picker-btn">
	<input
		class="file-picker-btn__input"
		type="file"
		accept={accept.toString()}
		{multiple}
		bind:files
		hidden
	/>
	{label}
</label>

<style lang="sass">
	.file-picker-btn
		border: 1px solid black
</style>
