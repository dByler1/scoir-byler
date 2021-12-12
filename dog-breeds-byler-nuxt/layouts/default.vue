<template>
  <div>
    <db-header />
    <main>
      <nuxt />
    </main>

    <db-footer />
  </div>
</template>

<script>
import DbHeader from "~/components/Header";
import DbFooter from "~/components/Footer";

export default {
  components: {
    DbHeader,
    DbFooter,
  },
  name: "default",
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  height: 100%;

  main {
    flex: auto;
    padding: 0 15px;
    max-width: 1290px;
    margin: 0 auto 40px;
    width: 100%;
  }
}
</style>
