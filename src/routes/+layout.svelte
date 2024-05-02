<script>
    const logo = "images/logo-wide" // must be a rectangle logo

    const nav = [
        {href: "/", name: "home"}
    ]
</script>

<img src="{logo}.png" alt="Logo">
{#each nav as n}
    <a href="{n.href}" role="button">{n.name}</a>
{/each}

<slot />