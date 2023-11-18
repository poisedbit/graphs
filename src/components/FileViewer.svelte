<script lang="ts">
    import { afterUpdate, createEventDispatcher } from "svelte";
    import FileItem from "./FileItem.svelte";
    import "$style/file-viewer.scss";

    export let id: string | undefined = undefined;
    export let center_content: boolean = false;
    export let items: ReadonlyArray<File> = [];

    let self: HTMLDivElement;

    const style = center_content ? "justify-content: safe center;" : undefined;

    const dispatch = createEventDispatcher<{
        del: { index: number; item: { file: File; node: HTMLDivElement } };
    }>();
    const del_item = (e: CustomEvent<{ file: File; node: HTMLDivElement }>) =>
        dispatch("del", {
            index: items.findIndex(x => x === e.detail.file),
            item: {
                file: e.detail.file,
                node: e.detail.node,
            },
        });

    afterUpdate(() => {
        if (self.scrollHeight && self.scrollHeight > self.clientHeight)
            self.style.width = `${self.offsetWidth + 5}px`;
    });
</script>

<div {id} class="file-viewer" {style} bind:this={self}>
    <ul class="file-viewer__list" {style}>
        {#each items as item}
            <FileItem bind:item on:del={del_item} />
        {/each}
    </ul>
</div>
