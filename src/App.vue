<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class App extends Vue {

  private beforeCreate() { console.info('App.vue : beforeCreate()'); }
  private created() { console.info('App.vue : created()'); }
  private beforeMount() { console.info('App.vue : beforeMount()'); }
  private mounted() { console.info('App.vue : mounted()'); }
  private beforeUpdate() { console.info('App.vue : beforeUpdate()'); }
  private updated() { console.info('App.vue : updated()'); }
  private beforeDestory() { console.info('App.vue : beforeDestory()'); }
  private destoryed() { console.info('App.vue : destoryed()'); }

}
</script>

<style lang="scss">
html {
  height: 100%;
  box-sizing: border-box; // padding と border の幅を要素の幅と高さに含める.
}
body {
  height: 100%;
  margin: 0px;
  box-sizing: border-box;
}
#app {
  height: 100%;
  box-sizing: border-box;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
