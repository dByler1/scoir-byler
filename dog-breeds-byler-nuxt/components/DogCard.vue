<template>
  <figure>
    <db-button
      btn-class="round"
      aria-label="remove dog card"
      @click.native="$emit('remove')"
    >
      <icon-x />
    </db-button>

    <img :src="imgUrl" :alt="breed" />

    <figcaption class="paragraph">{{ breed }}</figcaption>
  </figure>
</template>

<script>
import capitalizeFirstLetter from "~/mixins/capitalizeFirstLetter";

import DbButton from "~/components/Button";
import IconX from "~/components/icons/IconX";

export default {
  name: "dog-card",
  components: {
    DbButton,
    IconX,
  },
  props: {
    imgUrl: {
      type: String,
    },
  },
  mixins: [capitalizeFirstLetter],
  computed: {
    image() {
      //return the img url if available, else 1px png
      this.imgUrl
        ? this.imgUrl
        : "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    },
    breed() {
      if (this.imgUrl) {
        const parts = this.imgUrl.split("/");

        const breedArr = parts[4].split("-");

        return breedArr.map((n) => this.capitalizeFirstLetter(n)).join(" ");
      }

      return "";
    },
  },
};
</script>

<style lang="scss" scoped>
figure {
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;
  border: 3px solid $pewter;
  margin: 20px;
  width: 275px;

  @media screen and (min-width: 768px) {
    width: 350px;
  }
}

img {
  background-color: $dark-grey;
  object-fit: contain;
  object-position: center;
  width: 100%;
  height: auto;
  max-width: 275px;
  max-height: 175px;
  aspect-ratio: auto 275 / 175;

  @media screen and (min-width: 768px) {
    max-width: 350px;
    max-height: 200px;
    width: 100%;
    height: auto;

    aspect-ratio: auto 350 / 200;
  }
}

figcaption {
  text-align: center;
  background: #fff;
  padding: 20px;
}

::v-deep button {
  position: absolute;
  right: -10px;
  top: -15px;

  svg {
    height: 15px;
    width: 15px;

    path {
      fill: $black;
    }
  }

  &:hover svg path {
    fill: $dark-grey;
  }
}
</style>
