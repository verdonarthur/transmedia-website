<template>
    <div>
    <p>
        {{$t("popupPages." + popupRef +"."+ popupPage +".mainText")}}</p>
        <img class="chimney_img" v-if="popupPage === 'solution'" src="../assets/solutions/cheminee1.jpg">
        <img class="chimney_img" v-if="popupPage === 'solution'" src="../assets/solutions/cheminee2.jpg">
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
.chimney_img
{
  width:45%;
  margin: 10px 5px;
}
</style>
