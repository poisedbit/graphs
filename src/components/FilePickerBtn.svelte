<script lang="ts">
    export let label: string = "+ Add file";
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
        hidden
        bind:files
    />
    {label}
</label>

<style lang="sass">
    @import "$style/common"

    .file-picker-btn 
        @include button
</style>
