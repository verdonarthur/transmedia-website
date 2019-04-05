<template>
  <div id="app">
    <transition name="slide">
      <router-view />
    </transition>
  </div>
</template>
<script>

</script>
<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-enter-active {
  transition-duration: 1.3s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-leave-active {
  transition-duration: 1.3s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 100%;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}

@import "~normalize.css/normalize.css";

html,
body,
#app {
  height: 100%;
}

</style>
