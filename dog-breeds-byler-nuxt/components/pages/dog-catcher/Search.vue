<template>
  <v-select
    :class="`db-dropdown`"
    v-bind="config"
    v-model="dropdownValue"
    :disabled="disabled"
    :inputId="id"
  ></v-select>
</template>

<script>
import vSelect from "vue-select";

export default {
  components: {
    vSelect,
  },
  name: "dropdown",
  props: {
    model: {
      prop: "value",
      event: "input",
    },
    config: {
      type: Object,
      default() {
        return {
          placeholder: "-- Select --",
          options: [],
        };
      },
    },
    value: {
      type: [String, Number, Object],
      default: null,
    },
    placeholder: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    id: {
      type: String,
      default: "",
    },
  },
  computed: {
    dropdownValue: {
      get() {
        return this.value;
      },
      set(newDropdownValue) {
        this.$emit("input", newDropdownValue);
        this.$emit("change", newDropdownValue);
      },
    },
  },
};
</script>

<style lang="scss">
@import "vue-select/src/scss/vue-select.scss";

.dropdown-form-group {
  border: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;

  .dropdown-label {
    margin-bottom: 5px;
  }

  span.error {
    margin-top: 0.3rem;
  }
}

.db-dropdown {
  font-family: $font-family;

  .vs__dropdown-toggle {
    padding: 10px;
    border: 1px solid $dark-grey;
    border-radius: 0;

    &[aria-expanded="true"] {
      border: 1px solid $black;
    }
  }

  .vs__search {
    padding: 0;

    &::placeholder {
      color: $dark-grey;
    }
  }

  .vs__open-indicator {
    margin-top: -1px;
  }

  .vs__clear svg {
    fill: $black;
  }

  .vs__dropdown-menu {
    border: 1px solid $black;
    border-top: 0;
    box-shadow: none;

    li {
      padding: 14px;

      &:hover,
      &.vs__dropdown-option--highlight {
        background: $pewter;
        color: $black;
      }
    }
  }
}
</style>
