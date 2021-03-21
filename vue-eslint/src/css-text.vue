<script>
export default {
  render() {
    return (
      <div>
        <div class="css-style">css</div>
        <div class="less-style">less</div>
        <div class="scss-style">scss</div>
        <div class="stylus-style">stylus</div>
      </div>
    )
  },
}
</script>
<style lang="less">
@import './style/css.css';
@import './style/less.less';
@import './style/scss.scss';
@import './style/stylus.stylus';
</style>
