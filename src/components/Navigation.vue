<template>
  <div class="navigation">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/Page1">Page1</router-link>|
      <router-link to="/Page2">Page2</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Navigation extends Vue {

}
</script>

<style scoped lang="scss">
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
