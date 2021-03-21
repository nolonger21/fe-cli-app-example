<script lang="tsx">
import Vue, { VNode, CreateElement } from 'vue'
import Component from 'vue-class-component'
import svgImg from './assets/react.svg'
import cssText from './css-image'
import cssImage from './css-image'

const set = new Set()
set.add(1)
set.add(2)
set.add(3)

@Component({
  components: {
    cssText,
    cssImage,
  },
})
export default class App extends Vue {
  text = 'test' + [...set].join('\n')
  svgImg = svgImg
  mounted() {
    //
  }
  render(h: CreateElement): VNode {
    return (
      <div id="app">
        <css-text />
        <div class="text">{{ text }}</div>
        <css-image />
      </div>
    )
  }
}
</script>

<style lang="less">
#app {
  display: flex;
  width: 200px;
  margin: 0 auto;
  text-align: center;
  background-color: #eee;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  .text {
    color: black;
  }
}
</style>
