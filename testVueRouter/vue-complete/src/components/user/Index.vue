<template>
  <div>
    <h1>SELECT ONE USER TO MANAGE</h1>
    <ul class="list-group">
        <router-link class="list-group-item" aria-current="true" tag="li" to="user/1">
            User 1
        </router-link>
        <router-link class="list-group-item" aria-current="true" tag="li" to="user/2">
            User 2
        </router-link>
        <router-link class="list-group-item" aria-current="true" tag="li" to="user/3">
            User 3
        </router-link>
        <router-link class="list-group-item" aria-current="true" tag="li" to="user/4">
            User 4
        </router-link>

    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .list-group-item {
        cursor: pointer;
    }
</style>