<script lang="ts">
    import FileDropWrapper from "$comps/FileDropWrapper.svelte";
    import FilePickerBtn from "$comps/FilePickerBtn.svelte";
    import FileViewer from "$comps/FileViewer.svelte";
    import { mime_db } from "$lib/utils";
    import { sheets, sheets_handler } from "$view/stores/sheets";

    let files: FileList;

    $: if (files) {
        sheets_handler.up(files);
        console.log(files, $sheets);
    }

    $: f_len = $sheets.length;
</script>

<h2>1— Choose files</h2>
<div class="file-panel">
    <FileDropWrapper bind:files>
        <div class="file-panel__inner">
            {#if f_len}
                <!-- TODO(BUG): file doesn't remove itself -->
                <FileViewer
                    items={[...$sheets]}
                    center_content
                    on:del={e => sheets_handler.del(e.detail.index)}
                />
            {/if}
            <div
                class="panel-btns"
                style:justify-content={f_len !== 0 ? "space-between" : "center"}
            >
                <FilePickerBtn accept={mime_db} multiple bind:files />
                {#if f_len}
                    <button
                        class="panel-btns__reset"
                        type="button"
                        on:click={sheets_handler.rst}>Delete all</button
                    >
                {/if}
            </div>
        </div>
    </FileDropWrapper>
</div>

<style lang="sass">
    .file-panel
        width: 100%
        height: 100%
        display: flex
        align-items: center
        justify-content: center

        &__inner
            // width: 1035px
            width: 66.375rem + 0.125rem
            height: 39.6875rem
            padding: 1rem
            border: 5px dashed var(--color-outline)
            border-radius: 10px
            display: flex
            flex-direction: column
            align-items: center
            justify-content: center
    
    .panel-btns
        width: 100%
        padding: 2.5rem
        display: flex
        gap: 1rem
</style>
