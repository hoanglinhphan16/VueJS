<template>
  <div id="app" >
    <router-view name="Header"/>
    <div class="container">
      <img alt="Vue logo" src="./assets/logo.png">
      <transition name="slide">
        <router-view/>
      </transition>
      
    </div>
    
  </div>
  
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.slide-leave-active {
  transition: opacity 0.8s ease;
  opacity: 0;
  animation: slide-out 0.8s ease-out forwards;
}

.slide-leave {
  opacity: 1;
  transform: translateX(0);
}

@keyframes slide-out {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(100px);
  }
}
</style>
