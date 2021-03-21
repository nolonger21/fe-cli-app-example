<script lang="tsx">
import Vue from 'vue'
import svgImg from './assets/react.svg'

export default class CssImage extends Vue {
  render() {
    return (
      <div>
        <img class="image" src={require('./assets/vue.png')} />
        <div class="image bg-image" />
        <img class="image svg-image" src={svgImg} />
      </div>
    )
  }
}
</script>

<style lang="less">
.image {
  display: block;
  width: 50px;
  height: 50px;
  margin: 0 auto;
}
.bg-image {
  width: 100%;
  height: 60px;
  background: url('./assets/webpack.svg') no-repeat #273a41;
  background-size: 100%;
}
.svg-image {
  display: block;
  width: 100%;
  margin: 0 auto;
  background-color: gray;
}
</style>
