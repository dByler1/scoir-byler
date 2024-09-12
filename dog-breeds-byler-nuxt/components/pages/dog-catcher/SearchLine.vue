<template>
  <div class="search-line">
    <search
      :disabled="catching"
      :config="breedsListConfig"
      v-model="selectedBreed"
    />

    <span class="error danger p-small" v-if="breedsListError">{{
      breedsListError
    }}</span>

    <db-button @click.native="fetchBreed(false)" :disabled="catching"
      >Catch a Random Breed</db-button
    >

    <span class="error danger p-small" v-if="randomBreedError">{{
      randomBreedError
    }}</span>
  </div>
</template>

<script>
import capitalizeFirstLetter from "~/mixins/capitalizeFirstLetter";

import Search from "~/components/pages/dog-catcher/Search";
import DbButton from "~/components/Button";

export default {
  name: "search-line",
  components: {
    Search,
    DbButton,
  },
  props: {
    breedsList: {
      type: Array,
      default: () => [],
    },
    catching: Boolean,
  },
  data() {
    return {
      breedsListConfig: {
        placeholder: "Find breeds to catch...",
        options: [],
      },
      selectedBreed: null,
      breedsListError: null,
      randomBreedError: null,
    };
  },
  mixins: [capitalizeFirstLetter],
  watch: {
    breedsList: {
      immediate: true,
      handler: function () {
        if (this.breedsList) {
          this.breedsListConfig.options = this.breedsList.map((b) => {
            const parts = b.split(" ");

            const code = parts.reverse().join("/");

            const capitalizedParts = parts.map((p) => {
              return this.capitalizeFirstLetter(p);
            });

            const label = capitalizedParts.join(" ");

            return {
              label,
              code,
            };
          });
        }
      },
    },
    selectedBreed: function () {
      if (this.selectedBreed && this.selectedBreed.code) {
        this.fetchBreed(this.selectedBreed.code);
      }
    },
  },
  methods: {
    async fetchBreed(code) {
      this.resetForAttempt();

      const url = code
        ? `https://dog.ceo/api/breed/${code}/images/random`
        : "https://dog.ceo/api/breeds/image/random";

      try {
        const dog = await fetch(url);
        const dogJson = await dog.json();
        this.successState(dogJson.message);
      } catch (error) {
        this.errorState(error, code);
      }
    },
    resetForAttempt() {
      this.$emit("catching", true);

      this.randomBreedError = this.randomBreedError = null;
    },
    successState(message) {
      this.$emit("catching", false);

      this.$emit("caught", message);

      this.selectedBreed = null;
    },
    errorState(error, random) {
      console.error(error);

      this.$emit("catching", false);

      if (random) {
        this.randomBreedError = `Sorry, there was a problem catching a random breed. Please refresh the page and try again.`;
      } else {
        this.selectedBreed = null;

        this.breedsListError = `Sorry, there was a problem catching a breed. Please refresh the page and try again.`;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.search-line {
  display: flex;
  flex-direction: column;
  width: 100%;

  button.primary {
    margin-top: 40px;
  }

  .error {
    text-align: center;
  }
}
</style>
