<script lang="ts">
    import { mode } from "../stores"

    import NightMoon from '@streamlinehq/streamlinehq/img/illustrations-multicolor/night-moon-uQFV4I.svg';
    import MoutainAndSun from '@streamlinehq/streamlinehq/img/illustrations-multicolor/moutain-and-sun-7ET5oi.svg'

    const handleClick = () => $mode = $mode === "dark" ? "light" : "dark"
</script>

<button on:click={handleClick} class={$mode}>
    {#if $mode === "light"}
    <NightMoon class="icon"/>
    {:else}
    <MoutainAndSun class="icon"/>
    {/if}
    {$mode} mode
</button>

<style lang="scss">
    button {
        text-transform: capitalize;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: transparent;
        border: none;
    }

    :global(svg) {
        height: 2rem;
        width: auto;
        margin-right: 0.5rem;
    }
</style>