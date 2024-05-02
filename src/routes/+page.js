import { getItems } from "$lib/database";

export async function load() {
    return {
        items: await getItems()
    }
}