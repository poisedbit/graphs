<script lang="ts">
	export let step: number;
</script>

<nav style:justify-content={step > 0 ? "space-between" : "flex-end"}>
	{#if step > 0}
		<button type="button" on:click={() => (step -= 1)}>Back</button>
	{/if}
	{#if step < 2}
		<button type="button" on:click={() => (step += 1)}>Next</button>
	{/if}
</nav>

<style lang="scss">
	nav {
		height: 15%;
		padding: 0 2.5%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	button {
		width: 10%;
		height: 2.5rem;
	}
</style>
