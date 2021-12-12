<template>
  <nav>
    <div class="inner">
      <dog-cat />
    </div>
  </nav>
</template>

<script>
import DogCat from "~/components/icons/DogCat";

export default {
  name: "db-header",
  components: {
    DogCat,
  },
};
</script>

<style lang="scss" scoped>
nav {
  border-bottom: 1px solid $beige;

  .inner {
    max-width: 1290px;
    padding: 15px;
    margin: 0 auto;
  }
}
</style>
