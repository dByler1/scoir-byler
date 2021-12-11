<template>
  <button
    :type="type"
    :class="`${btnClass}`"
    :ref="id"
    :id="id"
    :disabled="disabled"
    :name="name"
  >
    <slot></slot>
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
    btnClass: {
      type: String,
      default: "primary",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  padding: 10px;
}
</style>
