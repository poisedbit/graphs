<script lang="ts">
    import NavBtns from "./NavBtns.svelte";

    export let active: boolean;
    export let pace: 0 | 1 | 2;
</script>

<section style:width={active ? "100%" : "5%"}>
    {#if active}
        <slot />
        <NavBtns bind:pace />
    {/if}
</section>

<style lang="sass">
	section
		display: flex
		flex-direction: column
		justify-content: space-between
		border: 1px solid black
</style>
