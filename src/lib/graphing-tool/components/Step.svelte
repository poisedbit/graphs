<script lang="ts">
	export let active: boolean;
</script>

<section style:width={active ? "100%" : "5%"}>
	{#if active}
		<slot />
	{/if}
</section>

<style lang="css">
	section {
		border: 1px solid black;
		display: flex;
		flex-direction: column;
	}
</style>
