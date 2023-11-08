<script setup lang="ts">
import type {Product} from "~/interface";

const {params, path} = useRoute()
const productData = ref()

const {data, pending, error} = await useLazyAsyncData(
    `data`,
    () => $fetch<Product>(`/api/product-detail/${params.id}`)
)

useHead({
  title: () => data.value.data.title,
  meta: [
    {name: 'description', content: () => data.value.data.description}
  ]
})

</script>

<template>
  <div v-if="!pending">
    data, {{ data }}
    <hr>

    <ul>
      <li>
        <span>ID</span>
        <span>:</span>
        <span>{{ data.data.id }}</span>
      </li>
      <li>
        <span>TITLE</span>
        <span>:</span>
        <span>{{ data.data.title }}</span>
      </li>
      <li>
        <span>PRICE</span>
        <span>:</span>
        <span>{{ data.data.price }}</span>
      </li>
      <li>
        <span>DESCRIPTION</span>
        <span>:</span>
        <span>{{ data.data.description }}</span>
      </li>
      <li>
        <span>CATEGORY</span>
        <span>:</span>
        <span>{{ data.data.category }}</span>
      </li>
      <li>
        <span>image</span>
        <span>:</span>
        <span><img :src="data.data.image" width="100" alt="" /></span>
      </li>
    </ul>

    <hr>
    <hr>
    <nuxt-link to="/">Go Products</nuxt-link>
  </div>
</template>

<style scoped>

</style>