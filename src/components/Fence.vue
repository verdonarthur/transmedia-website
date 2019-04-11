<template>
    <div>
    <p>
        {{$t("popupPages." + popupRef +"."+ popupPage +".mainText")}}</p>

        <img class="solution" v-if="popupPage === 'solution'" src="../assets/solutions/cloture1.jpg">
     <img class="solution" v-if="popupPage === 'solution'" src="../assets/solutions/cloture2.jpg">

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
.solution
{
  max-width:45%;
}
</style>
