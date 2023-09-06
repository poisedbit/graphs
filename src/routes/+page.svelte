<script lang="ts">
	import ThreeStep from "$lib/components/ThreeStep.svelte";
</script>

<!--
	prototype interface
	inspiration from hat.sh (https://github.com/sh-dv/hat.sh)
-->

<header>
	<h1>Graphs</h1>
</header>
<main>
	<ThreeStep />
</main>

<style lang="scss">
	header {
		width: auto;
		height: 10%;
		margin-top: 5%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	main {
		width: auto;
		height: 70%;
		margin: 0 30%;
		padding: 0 2.5%;
	}
</style>
