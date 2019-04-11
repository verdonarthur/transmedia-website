<template>
    <div>
    <p>
        {{$t("popupPages." + popupRef +"."+ popupPage +".mainText")}}</p>

        <img v-if="popupPage === 'solution'" src="../assets/website_cheminee.png">
        <img v-if="popupPage === 'solution'" src="../assets/website_cheminee.png">
        
    </div>
</template>
<script>
export default {
  props: {
    popupPage: String,
    popupRef: String
  }

}
</script>
<style>

</style>
