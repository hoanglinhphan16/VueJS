<template>
  <div id="app">
    <div class="container">
      <h1>VueX Section</h1>
      <app-result></app-result>
      <br />
      <br />
      <app-counter></app-counter>
      <br />
      <br />
      <app-orther></app-orther>
    </div>
  </div>
</template>

<script>
import AppCounter from "./components/Counter.vue";
import AppResult from "./components/Result.vue";
import AppOrther from "./components/Orther.vue";
export default {
  name: "App",
  components: {
    AppCounter,
    AppResult,
    AppOrther,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
