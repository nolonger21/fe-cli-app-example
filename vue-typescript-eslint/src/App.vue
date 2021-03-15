<template>
</template>

<script lang="tsx">
import Vue from 'vue'
import Component from 'vue-class-component'
import svgImg from './assets/react.svg'

const set = new Set()
set.add(1)
set.add(2)
set.add(3)

@Component({})
export default class App extends Vue {
  text = 'test' + [...set].join('\n')
  svgImg = svgImg
  mounted() {
    //
  }
  render(){
    return (
      <div id="app">
        <div className="css-style">css</div>
        <div className="less-style">less</div>
        <div className="scss-style">scss</div>
        <div className="stylus-style">stylus</div>
        <div className="text">{ Text }</div>
        <img className="image" src="./assets/vue.png" />
        <div className="image bg-image" />
        <img className="image svg-image" src={svgImg} />
      </div>
    )
  }
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
