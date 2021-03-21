<template>
  <div id="app">
    <css-text />
    <div class="text">{{ text }}</div>
    <css-image />
  </div>
</template>

<script lang="tsx">
import { defineComponent } from 'vue'
import cssImage from './css-image.vue'
import cssText from './css-text'

export default defineComponent({
  name: 'App',
  components: {
    cssText,
    cssImage,
  },
  setup() {
    const set = new Set()
    set.add(1)
    set.add(2)
    set.add(3)

    const text = 'test' + [...set].join('\n')
    return { text }
  },
})
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
