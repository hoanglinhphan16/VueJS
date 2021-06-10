<template>
  <div>
    <button class="btn btn-danger" @click="increment">Plus</button>
    <button class="btn btn-primary" @click="asyncDecrement">Minus</button>

    <br />
    <hr />
    <!-- <input type="text" :value="value" @input="changeValue"> -->
    <input type="text" v-model="value" />
    <p>Text : {{ value }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    value: {
      // use for v-bind
      // return this.$store.getters.value;
      get() {
        return this.$store.getters.value;
      },
      set(value) {
        this.$store.dispatch("updateValue", value);
      },
    },
  },
  methods: {
    ...mapActions(["increment", "asyncDecrement"]),
    changeValue(event) {
      this.$store.dispatch("updateValue", event.target.value);
    },
  },
};
</script>

<style>
button {
  margin: 10px 10px;
}
</style>
