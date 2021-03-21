<template>
  <div id="app">
    <css-text />
    <div class="text">{{ text }}</div>
    <css-image />
  </div>
</template>

<script>
import cssText from './css-text'
import cssImage from './css-image'

export default {
  components: {
    cssText,
    cssImage,
  },
  data() {
    const set = new Set()
    set.add(1)

    set.add(2)
    set.add(3)

    return {
      text: 'test' + [...set].join('\n'),
    }
  },
  mounted() {},
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
