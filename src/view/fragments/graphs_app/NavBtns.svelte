<script lang="ts">
	export let pace: 0 | 1 | 2;
</script>

<nav>
	{#if pace > 0}
		<button class="left" type="button" on:click={() => (pace -= 1)}
			>Back</button
		>
	{/if}
	{#if pace < 2}
		<button class="right" type="button" on:click={() => (pace += 1)}
			>Next</button
		>
	{/if}
</nav>

<style lang="sass">
	nav
		margin: 0 5% 2.5%
		
		button
			width: 10%
			height: 3rem

			&.left
				float: left

			&.right
				float: right
</style>
