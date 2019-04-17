<template>
  <div id="app">
    <transition name="slide">
      <router-view/>
    </transition>
  </div>
</template>
<script>
</script>
<style lang="scss">

/* /* Enter and leave animations can use different */
/* durations and timing functions.              */
/* .slide-enter-active {
  transition-duration: 1.3s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-leave-active {
  transition-duration: 1.3s;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}
.slide-leave-active .cliquable,
.slide-leave-active .stylePC,
 {
  visibility: hidden;
}

.slide-enter-to,
.slide-leave {
  max-height: 100%;
  overflow: hidden;
} */
/* Cacher les éléments cliquables sur la page des pièges avant de faire les transitions vers les autres pages*/
/* .slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
} */ 

@import "~normalize.css/normalize.css";
@import "~bulma/sass/utilities/_all";

$primary:rgb(38, 148, 38);
$primary-invert:findColorInvert($primary);
$success: rgb(38, 148, 38);
$success-invert: findColorInvert($success);

$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
);

html,
body,
#app {
  background-color: #eee;
  height: 100%;
}

p {
  font-family: "Lato", sans-serif;
  font-size: 2.2vh;
}

h1,
h2,
h3,
button,
h1.title, h2.title, h2.subtitle {
  font-weight: normal;
  font-family: "Fjalla One", sans-serif;
}
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
