<template>
  <section>
    <h1>Dog Catcher</h1>

    <div class="search-line">
      <text-input
        placeholder="Find a breed to catch"
        name="search for a dog breed"
      />

      <db-button @click.native="randomFetch" :disabled="catching"
        >Catch a Random Breed</db-button
      >
    </div>

    <h2>Caught Breeds</h2>

    <pages-dog-catcher-collection
      :collection="caught"
      @remove="removeCard($event)"
    />
  </section>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      catching: false,
      caught: [],
    };
  },
  methods: {
    async randomFetch() {
      this.catching = true;

      const random = await this.$axios.$get(
        "https://dog.ceo/api/breeds/image/random"
      );

      this.catching = false;
      this.caught.push(random.message);
    },
    removeCard(index) {
      this.caught.splice(index, 1);
    },
  },
  async fetch() {
    const breeds = await this.$axios.$get(
      "https://dog.ceo/api/breeds/list/all"
    );
  },
};
</script>

<style lang="scss" scoped>
h1,
h2 {
  display: flex;
  justify-content: center;
}

h2 {
  margin: 70px 0 30px;
}

.search-line {
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    margin-bottom: 40px;
  }
}
</style>
