<template>
  <div>
    <h3>THIS IS RESULT: {{ tenResults }}</h3>
    <h3>THIS IS RESULT: {{ oneHundred }}</h3>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["tenResults", "oneHundred"]),
  },
};
</script>

<style></style>
