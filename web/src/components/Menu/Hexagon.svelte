<script lang="ts">
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    export let width: string = '98%';
    export let height: string = '98%';
    export let scale: string = '1';
    export let active: boolean = false;
    export let disabled: boolean = false;

    $: if (active) {
        fill = 'url(#hexGradient)';
        stroke = '0';
        filter = 'drop-shadow(0 0 0.5vw #171717)';
    } else {
        fill = disabled ? 'var(--secondary)' : 'url(#hexGradient)';
        stroke = disabled ? '0vw' : '0.5vw';
        filter = disabled ? '' : 'drop-shadow(0 0 0.1vw #171717)';
    }

    let fill: string = 'url(#hexGradient)';
    let stroke: string = '0';
    let filter: string = '';
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<svg
    {width}
    {height}
    version="1.1"
    style="fill: {fill}; filter: {filter}; transform: scale({scale});"
    class="origin-center transition-all duration-200"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    xml:space="preserve"
    on:click={() => dispatch('click')}
>
    <defs>
        <linearGradient id="hexGradient" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="rgba(74, 144, 226, 0.9)" />
            <stop offset="100%" stop-color="rgba(142, 68, 173, 0.9)" />
        </linearGradient>
    </defs>
    <g id="SVGRepo_bgCarrier" stroke-width="0" />
    <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
        <path
            stroke="#C1C1C1"
            stroke-width="1"
            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"
        />
    </g>
</svg>