<script lang="ts">
    import { page } from "$app/stores";
    import ThemeSwitcher from "$comps/ThemeSwitcher.svelte";
    import "$style/app.scss";
</script>

<header>
    <h1>{$page.data["title"]}</h1>
    <nav>
        <ThemeSwitcher />
    </nav>
</header>
<slot />

<style lang="sass">
    header
        width: auto
        height: 5%
        padding: 0 5%
        display: flex
        align-items: center
        justify-content: space-between
</style>
