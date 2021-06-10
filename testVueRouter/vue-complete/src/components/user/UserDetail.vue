<template>
  <div>
    <h1>THIS IS USER DETAIL</h1>
    <p>User with id {{ id }}</p>
    <router-link
    tag="button"
    class="btn btn-warning btn-block"
    :to="link">Edit User</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id : this.$route.params.id,
      link: {
        name : 'useredit',
        params: {id : this.$route.params.id}, 
        query: {
          locate: 'vi', 
          browser: 'chrome'
        },
        hash: '#vue'
      }
    }
  },
  /* eslint-disable no-constant-condition */
  beforeRouteEnter(to, from, next) {
      if (true) {
        next()
      }
      else {
        next(false)
      }
    },
  watch: {
    '$route'(to) {
        this.id = to.params.id
      }
    }
}
</script>

<style>

</style>