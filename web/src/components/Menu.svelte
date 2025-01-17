<script lang="ts">
    import type { Option, MenuOptionType } from '@typings/option';
    import Hexagon from './Menu/Hexagon.svelte';
    import { ReceiveEvent, SendEvent } from '@utils/eventsHandlers';
    import { Receive, Send } from '@enums/events';
    import { fly, scale } from 'svelte/transition';

    let options: Option[] = [];

    let availableTypes: string[] = [];

    let MENU_TYPES: MenuOptionType[] = [
        {
            value: 'Doors',
            icon: 'doorr',
        },
        {
            value: 'Windows',
            icon: 'windowr',
        },
        {
            value: 'Seats',
            icon: 'seat',
        },
        {
            value: 'Extras',
            icon: 'extra',
        },
    ];

    let selectedType: string = MENU_TYPES[0].value;

    ReceiveEvent(Receive.update, (data: Option[]) => {
        options = data;
    });

    ReceiveEvent(Receive.initialise, (types: string[]) => {
        availableTypes = types;

        // see whicch of MenuOptionType is available
        for (let i = 0; i < MENU_TYPES.length; i++) {
            const value = MENU_TYPES[i].value;
            if (availableTypes.includes(value)) {
                selectedType = value;
                SendEvent(Send.changeType, selectedType);
                break;
            }
        }
    });

    function optionClick(option) {
        SendEvent<Option, boolean>(Send.click, option);
    }

    function typeClick(type: MenuOptionType) {
        selectedType = type.value;
        SendEvent(Send.changeType, type.value);
    }

    function close() {
        // Your close logic here
        SendEvent(Send.close);
    }
</script>

{#each options as option}
    {#if option.visible}
        {#key selectedType}
            <button
                transition:scale={{ duration: 150 }}
                style="left: {option.x}px; top: {option.y}px;"
                on:click={() => optionClick(option)}
                class="aspect-square option {option.active
                    ? 'active:outline-2 active:outline-red-600 hover:cursor-pointer'
                    : ''} grid place-items-center absolute -translate-x-1/2 -translate-y-1/2 w-[5vh]"
            >
                <Hexagon active={option.active} />
                <i class="{option.icon} icon fill-white absolute"></i>
            </button>
        {/key}
    {/if}
{/each}

<div
    transition:scale={{ duration: 150 }}
    class="flex flex-row items-center justify-center absolute left-1/2 -translate-x-1/2 bottom-[0.5vh] gap-[0.5vw]"
>
    {#each MENU_TYPES as type}
        {@const disabled = !availableTypes.includes(type.value)}
        <button
            on:click={() => typeClick(type)}
            {disabled}
            class="w-[9vh] h-[9vh] grid place-items-center option"
        >
            <Hexagon {disabled} active={selectedType === type.value} />
            <div
                class="{type.icon} icon fill-white absolute !w-[10%] {disabled &&
                    'opacity-50'}"
            ></div>
        </button>
    {/each}
</div>

<button
    transition:scale={{ duration: 150 }}
    class="w-[6vh] h-[6vh] grid place-items-center absolute left-1/2 -translate-x-1/2 bottom-[8vh]"
>
    <Hexagon on:click={close} scale={'1'} />
    <div class="fill-white absolute close icon !w-[50%]"></div>
</button>

<div
    transition:fly={{ y: 100, duration: 150 }}
    class="menu-background"
/>

<style>
    .menu-background {
        position: absolute;
        bottom: -2vh;
        left: 50%;
        transform: translateX(-50%);
        width: 45vh;
        height: 17vh;
        background: radial-gradient(
            ellipse at top,
            rgba(23, 23, 23, 0.8) 0%,
            rgba(23, 23, 23, 0.6) 70%,
            rgba(23, 23, 23, 0.4) 100%
        );
        border-radius: 50% 50% 0 0 / 100% 100% 0 0;
        filter: blur(10px);
        z-index: -100;
    }
</style>