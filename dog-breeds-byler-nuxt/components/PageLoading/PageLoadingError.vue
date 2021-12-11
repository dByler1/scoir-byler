<template>
  <div class="error-msg">
    <slot>
      <p>
        Sorry, there was an error loading the page. Please refresh the page to
        try again.
      </p>
    </slot>
  </div>
</template>

<script>
export default {
  name: "page-loading-error",
};
</script>

<style lang="scss" scoped>
.error-msg {
  display: flex;
  margin: auto;
  justify-content: center;

  max-width: 600px;
  width: 100%;
}
</style>
