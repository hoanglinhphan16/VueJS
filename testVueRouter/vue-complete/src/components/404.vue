<template>
  <div class="text-center">
      <h2>ERROR 404</h2>
      <p>You have met some error</p>
      <button class="btn btn-primary" @click="$router.push( { name: 'home'} )">
          Back to home
      </button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>