<script lang="ts">
	import NavBtns from "./NavBtns.svelte";

	export let active: boolean;
	export let pace: 0 | 1 | 2;
</script>

<section style:width={active ? "100%" : "3%"}>
	{#if active}
		<slot />
		<div>
			<NavBtns bind:pace />
		</div>
	{/if}
</section>

<style lang="sass">
	section
		display: flex
		flex-direction: column
</style>
