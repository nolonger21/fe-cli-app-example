<script lang="tsx">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import CssText from './css-text.vue'
import CssImage from './css-image.vue'

const set = new Set()
set.add(1)
set.add(2)
set.add(3)

@Component({})
export default class App extends Vue {
  text = 'test' + [...set].join('\n')

  mounted() {
    //
  }
  render() {
    return (
      <div id="app">
        <CssText />
        <div class="text">{this.text}</div>
        <CssImage />
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
