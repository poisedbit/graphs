<script lang="ts">
	export let label: string = "Add file";
	export let id: string = "";
	export let accept: ReadonlyArray<string> = [];
	export let multiple: boolean = false;
	export let files: FileList;
</script>

<label>
	<input
		{id}
		type="file"
		accept={accept.toString()}
		{multiple}
		bind:files
		hidden
	/>
	{label}
</label>

<style lang="sass">
	label
		height: 2.5rem
		padding: 0.5rem 1rem
		border: 1px solid black
		cursor: pointer
		display: flex
		align-items: center
		justify-content: center
</style>
