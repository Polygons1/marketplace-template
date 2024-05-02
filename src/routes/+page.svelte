<script>
    import Item from '$lib/item.svelte'

    export let data
</script>

<h1>Items</h1>

<div class="items-container">
    {#each data.items as item}
        <Item {...item} />
    {/each}
</div>

<style>
    .items-container {
        display: flex;
        gap: 20px;
        justify-content: center;
    }
</style>
