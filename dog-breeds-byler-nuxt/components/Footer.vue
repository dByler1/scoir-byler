<template>
  <footer>
    <div class="inner"></div>
  </footer>
</template>

<script>
export default {
  name: "db-footer",
};
</script>

<style lang="scss" scoped>
footer {
  background: $dark-grey;
  min-height: 250px;
  background-image: url("~/assets/images/paws.svg");
  background-size: 100px auto;
  background-position: center;
  background-repeat: repeat;
}
</style>
