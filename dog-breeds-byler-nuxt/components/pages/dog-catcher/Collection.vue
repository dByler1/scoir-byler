<template>
  <ul class="collection" v-if="collection.length">
    <li v-for="(breed, ix) in collection" :key="ix">
      <dog-card :img-url="breed" @remove="$emit('remove', ix)" />
    </li>
  </ul>

  <p v-else>
    There are currently no breeds caught. Search above to catch some!
  </p>
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

p {
  text-align: center;
}
</style>
