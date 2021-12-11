<template>
  <nav>
    <div class="inner">
      <h1>Dogs, Dogs, Dogs</h1>
    </div>
  </nav>
</template>

<script>
export default {
  name: "db-header",
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
