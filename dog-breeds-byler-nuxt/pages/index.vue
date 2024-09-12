<template>
  <page-loading-spinner v-if="$fetchState && $fetchState.pending" />
  <page-loading-error v-else-if="$fetchState && $fetchState.error" />
  <section v-else>
    <h1 ref="title">Dog Catcher</h1>

    <search-line
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

    <collection :collection="caught" @remove="removeCard($event)" />
  </section>
</template>

<script>
import { mapState } from "vuex";

import PageLoadingSpinner from "~/components/PageLoading/PageLoadingSpinner";
import PageLoadingError from "~/components/PageLoading/PageLoadingError";
import SearchLine from "~/components/pages/dog-catcher/SearchLine";
import Collection from "~/components/pages/dog-catcher/Collection";
import DbButton from "~/components/Button";

export default {
  name: "dog-catcher-home",
  components: {
    PageLoadingSpinner,
    PageLoadingError,
    SearchLine,
    Collection,
    DbButton,
  },
  data() {
    return {
      selectedBreed: null,
      catching: false,
      caught: [],
      simpleBreedsList: [],
    };
  },
  cmputed: {
    ...mapState({
      storeBreedsList: (state) => state.dogs.breedsList,
    }),
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
    if (this.storeBreedsList)
      return this.createSimpleBreedsList(this.storeBreedsList);

    try {
      const breeds = await fetch(
        "https://dog.ceo/api/breeds/list/all"
      );
      const breedsJson = await breeds.json();

      this.simpleBreedsList = this.createSimpleBreedsList(breedsJson.message);
      await this.$store.dispatch("dogs/setBreedsList", breedsJson.message);

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
