<template>
  <page-loading-spinner v-if="$fetchState.pending" />
  <page-loading-error v-else-if="$fetchState.error" />
  <section v-else>
    <h1>Dog Catcher</h1>

    <pages-dog-catcher-search-line
      :breeds-list="simpleBreedsList"
      :catching="catching"
      @catching="catching = $event"
      @caught="caught.push($event)"
    />

    <div class="caught-headline">
      <h2>Caught Breeds</h2>
      <db-button
        btn-class="outline"
        :disabled="caught.length == 0"
        @click.native="caught = []"
        >Clear All</db-button
      >
    </div>

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
      selectedBreed: null,
      catching: false,
      caught: [],
      simpleBreedsList: [],
    };
  },
  methods: {
    removeCard(index) {
      this.caught.splice(index, 1);
    },
    flattenSubBreeds(breed, subBreeds) {
      const formattedSubBreeds = [];

      subBreeds.forEach((sb) => {
        formattedSubBreeds.push(`${sb} ${breed}`);
      });

      return formattedSubBreeds;
    },
    createSimpleBreedsList(breeds) {
      let simpleBreedsList = [];

      for (const property in breeds) {
        if (breeds[property].length != 0) {
          const subBreeds = this.flattenSubBreeds(property, breeds[property]);

          simpleBreedsList = simpleBreedsList.concat(subBreeds);
        } else {
          simpleBreedsList.push(property);
        }
      }
      return simpleBreedsList;
    },
  },
  async fetch() {
    try {
      const breeds = await this.$axios.$get(
        "https://dog.ceo/api/breeds/list/all"
      );

      this.simpleBreedsList = this.createSimpleBreedsList(breeds.message);
      return;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}

.caught-headline {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 70px 0 30px;

  h2 {
    margin: 0;
  }

  button {
    position: absolute;
    right: 0;
    width: unset;
    min-width: unset;
  }
}
</style>
