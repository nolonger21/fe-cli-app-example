<template>
  <div id="app">
    <div class="css-style">css</div>
    <div class="less-style">less</div>
    <div class="scss-style">scss</div>
    <div class="stylus-style">stylus</div>
    <div class="text">{{ text }}</div>
    <img class="image" src='./assets/logo.png' />
  </div>
</template>

<script>
import './stylus.stylus'

export default {
  data() {
    const set = new Set()
    set.add(1)
    set.add(2)
    set.add(3)
    return {
      text: '测试' + [...set].join('\n')
    };
  },  
  mounted() {
  }
};
</script>

<style lang="less">
@import './css.css';
@import './less.less';
@import './scss.scss';
@import './stylus.stylus';

#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 200px;
  height: 200px;
  background-color: #eee;
  margin: 0 auto;
  text-align: center;
  .text {
    color: black;
  }
  .image {
    width: 50px;
    height: 50px;
    margin: 0 auto;
    display: block;
  }
}

</style>
