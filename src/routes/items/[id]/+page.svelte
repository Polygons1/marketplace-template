<script>
	import { getItemFromID } from '$lib/database.js';
	import Spinner from '$lib/spinner.svelte';

    export let data
</script>


{#await getItemFromID(data.id)}
    <Spinner />
{:then item}
    <h1>{item.name}</h1>
    <p>Price: {item.price}</p>
    <img src={item.image} alt={item.name} />
{/await}