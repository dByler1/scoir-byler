<template>
  <button
    :type="type"
    :class="`${btnClass}`"
    :ref="id"
    :id="id"
    :disabled="disabled"
    :aria-label="label"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "db-button",
  props: {
    id: {
      type: String,
      default: function () {
        return `button-${this._uid}`;
      },
    },
    type: {
      type: String,
      default: "button",
    },
    label: {
      type: String,
    },
    btnClass: {
      type: String,
      default: "primary",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  padding: 10px;
}
</style>
