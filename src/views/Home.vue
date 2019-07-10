<template>
  <div class="root">
    <div class="top">
      <Navigation />
      <Component1 value="Home" />
    </div>
    <div class="center">
      <div class="center left">
        <button>Button1</button>
        <br />
        <button>Button2</button>
      </div>
      <div class="center right">
        <div class="panel" style="font-size:1.5em">
          <div>{{time1}}</div>
          <br />
          <div>{{time2}}</div>
        </div>
        <div class="panel webcam">
          <div>
            <button class="type1" @click="signalr_connect()">Signal/R 接続</button>
            <button class="type1" @click="signalr_disconnect()">Signal/R 解除</button>
            <button class="type2" @click="webcam_start()">WebCam 起動</button>
            <button class="type2" @click="webcam_stop()">WebCam 停止</button>
          </div>
          <div style="margin:20px; font-size:1.5em">Signal/R: 接続中, WebCam: 停止（9999）</div>
          <div>
            <video class="webcam"></video>
            <video class="webcam"></video>
          </div>
        </div>
      </div>
    </div>
    <div class="buttom"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import Navigation from '@/components/Navigation.vue';
import Component1 from '@/components/Component1.vue';

@Component({
  components: {
    Navigation,
    Component1,
  },
})
export default class Home extends Vue {

  // nullで初期化しないとObservableにならない。
  private time1: Date | null = null;
  private time2: string | null = null;

  @Watch('time1')
  private time_onChange(val: Date | null, oldVal: Date | null) {
    this.time2 = this.time1!.valueOf().toString();
  }

  private created() {
    this.setTimer();
  }

  private setTimer() {
    window.setInterval(() => {
      this.time1 = new Date();
    }, 1000);
  }

  // Signal/R 接続
  private signalr_connect() {
  }
  // Signal/R 解除
  private signalr_disconnect() {
  }
  // WebCam 起動
  private webcam_start() {
  }
  // WebCam 停止
  private webcam_stop() {
  }

}
</script>

<style lang="scss">
div.root {
  box-sizing: border-box;
  height: 100%;
}
div.top {
  box-sizing: border-box;
  height: 200px;
  border: 1px dashed;
  border-color: blue;
  border-radius: 10px;
}
div.center {
  box-sizing: border-box;
  height: calc(100% - 200px - 200px);
  border: 1px dashed;
  border-color: red;
  border-radius: 10px;
  div.center.left {
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    height: 100%;
    width: 300px;
    border: 1px dashed;
    border-color: green;
    border-radius: 10px;
  }
  div.center.right {
    box-sizing: border-box;
    display: inline-block;
    vertical-align: top;
    height: 100%;
    width: calc(100% - 300px);
    border: 1px dashed;
    border-color: deeppink;
    border-radius: 10px;
  }
}
div.center {
  button {
    margin: 10px;
    border-radius: 10px;
    height: 80px;
    width: calc(100% - 10px * 2);
    background: rgb(183, 203, 223);
    font-size: 2em;
    font-size: 2em;
  }
  button:focus {
    outline: -webkit-focus-ring-color auto 0px;
    border: 0.5px solid;
    border-color: red;
    border-radius: 10px;
  }
}
div.buttom {
  box-sizing: border-box;
  height: 200px;
  border: 1px dashed;
  border-color: blue;
  border-radius: 10px;
}

div.panel {
  box-sizing: border-box;
  margin: 20px;
  padding: 20px;
  box-shadow: 2px 2px 5px 1px #5a5e8f6b;
  background-color: #f3f6fa;
  border: solid 1px #dce6f0;
  border-radius: 10px;
}
div.panel.webcam {
  text-align: left;
  button {
    height: 100px;
    width: 200px;
    font-size: 1.5em;
  }
  button.type1 {
    background: rgb(156, 207, 156);
  }
  button.type2 {
    background: rgb(230, 223, 129);
  }
  .webcam {
    height: 300px;
    width: 300px;
    margin: 10px;
    border: 1px solid;
    border-color: black;
    border-radius: 10px;
  }
}
</style>