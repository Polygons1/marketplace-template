export async function GET({params}) {
    return new Response(await (await fetch(`https://cdn.example.com/images/${params.image}`)).text(), {
        headers: {
            "Content-Type": `image/${params.image.split(".").at(-1)}`
        }
    })
}