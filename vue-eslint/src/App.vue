<template>
  <div id="app">
    <div class="css-style">css</div>
    <div class="less-style">less</div>
    <div class="scss-style">scss</div>
    <div class="stylus-style">stylus</div>
    <div class="text">{{ text }}</div>
    <img class="image" src="./assets/vue.png" />
    <div class="image bg-image" />
    <img class="image svg-image" :src="svgImg" />
  </div>
</template>

<script>
import svgImg from './assets/react.svg'

export default {
  data() {
    const set = new Set()
    set.add(1)

    set.add(2)
    set.add(3)

    return {
      text: 'test' + [...set].join('\n'),
      svgImg,
    }
  },
  mounted() {},
  // render() {
  //   return (
  //     <div id="app">
  //       <div class="css-style">css</div>
  //       <div class="less-style">less</div>
  //       <div class="scss-style">scss</div>
  //       <div class="stylus-style">stylus</div>
  //       <div class="text">{this.text}</div>
  //       <img class="image" src="./assets/vue.png" />
  //       <div class="image bg-image" />
  //       <img class="image svg-image" src={svgImg} />
  //     </div>
  //   )
  // },
}
</script>

<style lang="less">
@import './style/css.css';
@import './style/less.less';
@import './style/scss.scss';
@import './style/stylus.stylus';
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
}
</style>
