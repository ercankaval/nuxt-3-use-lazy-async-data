export default defineEventHandler(async (event) => {
    try {
        const response = await $fetch("https://fakestoreapi.com/products")
        return { data: response }
    } catch (err) {
        return sendError(event, new Error(`${err}`))
    }
})