<template>
  <h1>here</h1>
</template>

<script>
export default {
  name: "home",
  async fetch() {
    console.log("here");
    const breeds = await this.$axios.$get(
      "https://dog.ceo/api/breeds/list/all"
    );
    console.log("breeds", breeds);
  },
};
</script>
