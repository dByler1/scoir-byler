<template>
  <input
    :class="`form-control paragraph`"
    :id="id"
    :name="name"
    :type="type"
    :placeholder="placeholder"
    :readonly="readonly"
    v-model.trim="innerValue"
    :maxlength="maxLength"
  />
</template>

<script>
export default {
  name: "text-input",
  props: {
    id: {
      type: String,
      default: function () {
        return "input-" + this._uid;
      },
    },
    name: {
      type: String,
      default: function () {
        return "input-" + this._uid;
      },
    },
    placeholder: {
      type: [String, Number],
    },
    type: {
      type: String,
      default: "text",
      validator(value) {
        return [
          "url",
          "text",
          "password",
          "tel",
          "search",
          "number",
          "email",
        ].includes(value);
      },
    },
    maxLength: {
      type: Number,
    },
    orientation: {
      type: String,
      default: "vertical",
    },
    readonly: {
      type: Boolean,
    },
  },
  data() {
    return {
      innerValue: "",
    };
  },
  computed: {
    hasValue() {
      return !!this.innerValue;
    },
  },
  watch: {
    innerValue(value) {
      this.$emit("input", value);
    },
    value(val) {
      if (val !== this.innerValue) {
        this.innerValue = val;
      }
    },
  },
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
  },
};
</script>

<style lang="scss" scoped>
input {
  border: 1px solid $black;
  border-radius: 5px;
  padding: 14px;
  transition: all 0.1s ease-in-out;

  &:hover {
    cursor: pointer;
    padding: 15px;
  }

  &:focus {
    outline: none;
    border: 1px solid $dark-grey;
  }

  &::placeholder {
    color: $pewter;
  }
}
</style>
