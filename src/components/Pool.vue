<template>
    <div>
    <p>
        {{$t("popupPages." + popupRef +"."+ popupPage +".mainText")}}</p>

        <img class="solutionPool" v-if="popupPage === 'solution'" src="../assets/solutions/piscine.jpg">

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
.solutionPool
{
  margin-top:15px;
}
</style>
