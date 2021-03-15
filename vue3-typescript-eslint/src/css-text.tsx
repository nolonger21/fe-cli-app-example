import { defineComponent } from 'vue'

export default defineComponent(() => {
  return () => (
    <div>
      <div className="css-style">css</div>
      <div className="less-style">less</div>
      <div className="scss-style">scss</div>
      <div className="stylus-style">stylus</div>
    </div>
  )
})
