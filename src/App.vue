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
    -moz-transition-duration: 1.3s;
    -webkit-transition-duration: 1.3s;
    -o-transition-duration: 1.3s;
    transition-duration: 1.3s;
    -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  }

  .slide-leave-active {
    -moz-transition-duration: 1.3s;
    -webkit-transition-duration: 1.3s;
    -o-transition-duration: 1.3s;
    transition-duration: 1.3s;
    -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
  }

  .slide-enter-to,
  .slide-leave {
    max-height: 100px;
    overflow: hidden;
  }

  .slide-enter,
  .slide-leave-to {
    overflow: hidden;
    max-height: 0;
  }
  
  @import'~normalize.css/normalize.css';

  html,
  body,
  #app {
    height: 100%;
  }

  h1 {
    margin-top: 0;
  }

</style>
