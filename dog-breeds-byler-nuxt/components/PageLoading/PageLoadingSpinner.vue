<template>
  <div class="loading-circle">
    <svg class="spinner">
      <circle cx="50%" cy="50%" :r="radius"></circle>
    </svg>
  </div>
</template>

<script>
export default {
  name: "page-loading-spinner",
  props: {
    small: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    radius() {
      return this.small ? "13px" : "17px";
    },
  },
};
</script>

<style lang="scss" scoped>
.loading-circle {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 4rem;

  svg.spinner {
    animation: spin 4s linear infinite;
    overflow: hidden;
    width: 50px;

    circle {
      stroke-width: 4;
      stroke-dasharray: 4, 8;
      fill: transparent;
      stroke: gray;
    }
  }
}

.progress-list-item {
  .loading-circle {
    margin-bottom: 1px;

    svg.spinner {
      width: 30px;
      height: 30px;

      circle {
        stroke-width: 3;
        stroke-dasharray: 3, 6;
      }
    }
  }
}
</style>
