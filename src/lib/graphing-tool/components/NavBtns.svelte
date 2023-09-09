<script lang="ts">
	export let pace: 0 | 1 | 2;
</script>

{#if pace > 0}
	<nav>
		<button class="left" type="button" on:click={() => (pace -= 1)}
			>Back</button
		>
	</nav>
{/if}
{#if pace < 2}
	<nav>
		<button class="right" type="button" on:click={() => (pace += 1)}
			>Next</button
		>
	</nav>
{/if}

<style lang="sass">
	nav
		width: 100%
		padding: 0 2.5%

	button
		width: 10%
		height: 2.5rem

		&.left
			float: left

		&.right
			float: right
</style>
