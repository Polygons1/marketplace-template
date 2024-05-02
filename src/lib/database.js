export async function getItems() {
    return [
        {
            "id": "1",
            "name": "Item 1",
            "price": "10",
            "image": "images/item1.jpg"
        },
        {
            "id": "2",
            "name": "Item 2",
            "price": "15",
            "image": "images/item2.jpg"
        },
        {
            "id": "3",
            "name": "Item 3",
            "price": "20",
            "image": "images/item3.jpg"
        }
    ]
}

/**
 * @param {number} id
 */
export async function getItemFromID(id) {
    return (await getItems()).filter(item=>item.id === `${id}`)[0]
}

// replace with the actual database logic here, this is just an example!