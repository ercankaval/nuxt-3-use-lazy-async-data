import {Product} from "~/interface";

export default defineEventHandler(async (event) => {
    // @ts-ignore
    let id = event.context.params.id
    if (id) {
        try {
            const data = await $fetch<Product>(`https://fakestoreapi.com/products/${id}`)
            return {data}
        } catch (err) {
            return sendError(event, new Error(`${err}`))
        }
    }
})