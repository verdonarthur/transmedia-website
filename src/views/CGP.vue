<template>
  <div class="cgp">
    <div class="section">
      <h1 class="title is-1">{{$t('cgp.generalConditionParticipationCompetition')}}</h1>

      <div v-for="(value, key) in cgps" :key="key" class="content is-small">
        <template v-if(value.title)>
          <h2>{{value.title}}</h2>
          <div v-html="value.content" class="content is-small"></div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cgp',
  data () {
    return {
      cgps: this.$t('cgp')
    }
  }
}
</script>
<style scoped>
.cgu {
  width: 80%;
  margin: auto;
}
</style>
