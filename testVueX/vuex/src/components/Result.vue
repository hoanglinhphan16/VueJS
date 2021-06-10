<template>
  <div>
    <h3>THIS IS RESULT: {{ tenResults }}</h3>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["tenResults"]),
  },
};
</script>

<style></style>
