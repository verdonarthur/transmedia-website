<template>
    <div>
    <p>
        {{$t("popupPages." + popupRef +"."+ popupPage +".mainText")}}</p>

        <img class="solution" v-if="popupPage === 'solution'" src="../assets/solutions/vitre_solution1.jpg">
        <img class="solution" v-if="popupPage === 'solution'" src="../assets/solutions/vitre_solution2.jpg">
        <img class="problem" v-if="popupPage === 'problem'" src="../assets/solutions/vitre.jpg">

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
  margin:0 5px;
  margin-top:15px;
  }

  .problem
  {
    margin-top:15px;
  }
</style>
