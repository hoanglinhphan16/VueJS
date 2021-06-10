
<template>
  <div id="app" class="container">
    <div class="header">
      <button @click="changeComponent('Home')">Home</button>
      <button @click="changeComponent('Blog')">Blog</button>
      <button @click="changeComponent('Contact')">Contact</button>
    </div>
    <component v-bind:is="currentComponent"></component>
    
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Blog from './components/Blog.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    "Home": Home,
    "Contact": Contact,
    "Blog": Blog
  },
  data() {
    return {
      currentComponent: "Home",
    }
  },
  methods: {
    changeComponent(check) {
      this.currentComponent = check
    }
  }
}
</script>

<style>
.container {
  width: 800px
}
.header {
  text-align: center;
}
button {
  margin: 5px 5px;
  border-radius: 5px;
}
</style>