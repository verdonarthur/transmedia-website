<template>
  <div class="cgu">
    <div class="section">
      <h1 class="title is-1">{{$t('cgu.generalConditionParticipationCompetition')}}</h1>

      <div v-for="(value, key) in cgus" :key="key" class="content is-small">
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
  name: 'cgu',
  data () {
    return {
      cgus: this.$t('cgu')
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
