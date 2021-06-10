<template>
  <div>
    <h1>USER MANAGEMENT</h1>
    <button class="btn btn-primary btn-block" @click="backHome">Back Home</button>
    <transition name="slide">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
    methods: {
        backHome() {
            this.$router.push('/')
        },
    }
}
</script>

<style>
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