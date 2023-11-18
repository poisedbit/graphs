<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import { fmt_byte_size } from "$lib/utils";

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
    @import "$style/common"

    .file-item
        @include card(10em, 10em)

        &__name
            padding: 0 0.625em 0.625em
            overflow: hidden
            white-space: nowrap
            text-overflow: ellipsis
            text-align: center

        &__size 
            text-align: end
            display: none

        &__btn-del 
            width: 20px
            height: 20px
            position: absolute
            top: 0.625em
            right: 0.625em
            cursor: pointer
</style>
