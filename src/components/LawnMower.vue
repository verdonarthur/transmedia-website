<template>
    <div>
    <p>
        {{$t("popupPages." + popupRef +"."+ popupPage +".mainText")}}</p>

        <img class="problem" v-if="popupPage === 'problem'" src="../assets/solutions/robot.jpg">
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
.problem
{
  
}
</style>
