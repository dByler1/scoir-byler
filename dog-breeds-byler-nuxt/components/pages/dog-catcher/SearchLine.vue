<template>
  <div class="search-line">
    <pages-dog-catcher-search
      :disabled="catching"
      :config="breedsListConfig"
      v-model="selectedBreed"
    />

    <db-button @click.native="randomFetch" :disabled="catching"
      >Catch a Random Breed</db-button
    >
  </div>
</template>

<script>
import capitalizeFirstLetter from "~/mixins/capitalizeFirstLetter";

export default {
  name: "search-line",
  props: {
    breedsList: {
      type: Array,
      required: true,
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
    };
  },
  mixins: [capitalizeFirstLetter],
  watch: {
    breedsList: {
      deep: true,
      immediate: true,
      handler: function () {
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
      },
    },
    selectedBreed: function () {
      if (this.selectedBreed && this.selectedBreed.code) {
        this.fetchSpecificBreed(this.selectedBreed.code);
      }
    },
  },
  methods: {
    async fetchSpecificBreed(code) {
      this.$emit("catching", true);

      try {
        const dog = await this.$axios.$get(
          `https://dog.ceo/api/breed/${code}/images/random`
        );
        this.$emit("caught", dog.message);
        this.$emit("catching", false);
        this.selectedBreed = null;
      } catch (error) {
        console.error(error);
        this.$emit("catching", false);
        this.selectedBreed = null;
      }
    },
    async randomFetch() {
      this.$emit("catching", true);

      try {
        const random = await this.$axios.$get(
          "https://dog.ceo/api/breeds/image/random"
        );
        this.$emit("catching", false);
        this.$emit("caught", random.message);
      } catch (error) {
        this.$emit("catching", false);
        console.error(error);
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
}
</style>
