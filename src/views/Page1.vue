<template>
  <div class="hage1">
    <Navigation />
    <Component1 value="Page1" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navigation from '@/components/Navigation.vue';
import Component1 from '@/components/Component1.vue';

@Component({
  components: {
    Navigation,
    Component1,
  },
})
export default class Page1 extends Vue { }
</script>

<style lang="scss">
</style>