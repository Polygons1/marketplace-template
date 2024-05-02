<script>
    import { goto } from "$app/navigation";
    
    export let price = "0";
    export let image = "";
    export let name = "";
    export let id = "";
    
    function handleClick() {
        goto(`/items/${id}`);
    }
</script>

<style>
    /* Define default styles */
    div {
        border: 5px solid black;
        cursor: pointer;
        transition: all 0.3s ease; /* Smooth transition for hover effect */
    }
    
    /* Define hover styles */
    div:hover {
        border-color: dodgerblue; /* Change border color on hover */
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Add shadow effect on hover */
    }
    
    /* Define styles for image */
    img {
        max-width: 100%; /* Ensure image doesn't exceed container width */
    }
</style>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={handleClick} on:keydown={(e) => e.key === 'Enter' && handleClick()} tabindex="0" role="button" aria-label={`View ${name}`}>
    <img src={image} alt={`Item: ${name}`} />
    <h3>{name}</h3>
    <p>{price}</p>
</div>