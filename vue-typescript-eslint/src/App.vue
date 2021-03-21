<script lang="tsx">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import svgImg from './assets/react.svg'
import cssText from './css-image.vue'
import cssImage from './css-image.vue'

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
  @Prop()
  text = 'test' + [...set].join('\n')

  svgImg = svgImg

  mounted() {
    //
  }
  render() {
    return (
      <div id="app">
        <css-text />
        <div class="text">{this.text}</div>
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
