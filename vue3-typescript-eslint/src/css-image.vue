<script lang="tsx">
import svgImg from './assets/react.svg'

import { defineComponent } from 'vue'

export default defineComponent(() => {
  return () => (
    <div>
      <img class="image" src={require('./assets/vue.png')} />
      <div class="image bg-image" />
      <img class="image svg-image" src={svgImg} />
    </div>
  )
})
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
