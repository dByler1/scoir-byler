<template>
  <ul class="collection">
    <li v-for="(breed, ix) in collection" :key="ix">
      <dog-card :img-url="breed" @remove="$emit('remove', ix)" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "collection",
  props: {
    collection: [Array],
  },
};
</script>

<style lang="scss" scoped>
.collection {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
