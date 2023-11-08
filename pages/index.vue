<script setup lang="ts">

const {data, pending, error} = await useLazyAsyncData(
    `products`,
    () => $fetch(`/api/products`)
)

useHead({
  title: () => 'Index page',
  meta: [
    {name: 'description', content: () => 'Index page description'}
  ]
})
</script>

<template>
  <div>
    <div v-if="!pending">
      <ul>
        <li v-for="(item, i) in data.data">
          <nuxt-link :to="`/product-detail/${item.id}`">{{ item.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

</style>