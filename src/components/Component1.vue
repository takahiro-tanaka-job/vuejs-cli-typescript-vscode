<template>
  <div class="component1">
    <h1>{{ value }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Component1 extends Vue {

  @Prop() private value!: string;

}
</script>

<style scoped lang="scss">
h1 {
  margin: 40px 0 0;
}
</style>
