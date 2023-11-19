<script lang="ts">
    let expanded = false;
    let cs = "light dark";

    $: {
        document.documentElement.style.setProperty("color-scheme", cs);
        document.documentElement.classList.toggle(
            "light",
            cs === "light" ||
                (!window.matchMedia("(prefers-color-scheme: dark)") &&
                    cs === "light dark")
        );
    }
</script>

<svelte:document
    on:click={e => {
        if (
            e.target instanceof Element &&
            !e.target.className.includes("theme-switcher") &&
            expanded
        )
            expanded = !expanded;
    }}
/>

<div class="theme-switcher">
    <button
        class="theme-switcher__expand-btn"
        type="button"
        on:click={() => (expanded = !expanded)}
    >
        Theme
    </button>
    {#if expanded}
        <menu class="theme-switcher__menu">
            <li>
                <button
                    class="theme-switcher__default"
                    type="button"
                    on:click={() => (cs = "light dark")}
                >
                    Default
                </button>
            </li>
            <li>
                <button
                    class="theme-switcher__dark"
                    type="button"
                    on:click={() => (cs = "dark")}>Dark</button
                >
            </li>
            <li>
                <button
                    class="theme-switcher__light"
                    type="button"
                    on:click={() => (cs = "light")}
                >
                    Light
                </button>
            </li>
        </menu>
    {/if}
</div>

<style lang="sass">
    .theme-switcher
        *
            border-radius: .625em
        
        &__menu
            margin-top: .0625em
            // padding: .625em
            position: absolute
            background-color: transparent
            list-style: none
            
            button
                width: 100%

            *:not(:last-child)
                margin: .0625em 0
</style>
