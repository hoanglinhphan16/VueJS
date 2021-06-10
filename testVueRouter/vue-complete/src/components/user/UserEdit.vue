<template>
  <div>
      <h1>You are editing user has id: {{ this.$route.params.id }}</h1>
      <h4>Locate: {{$route.query.locate}}</h4>
      <h4>Browser: {{$route.query.browser}}</h4>

      <button class="btn btn-danger"
      @click="status = !status">Save Something</button>
      <div style="height: 700px">

      </div>
      <h3 id="vue">Learn Vue with Linh</h3>
      <div style="height: 1000px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: false,
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.status)
    {
      next()
    }
    else {
      if (confirm('Are u sure? Any data will not save!!'))
      {
        next()
      }
      else {
        next(false)
      }
    }
  }

}
</script>

<style>

</style>