import React, { useMemo } from 'react'
import { useState, useEffect } from 'react'
import svgImg from './assets/react.svg'
import './App.less'

if (true) {
}

function App(): React.ReactElement {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setCount((val) => val + 1)
    }, 3000)
  }, [])

  const text = useMemo(() => {
    const set = new Set()
    set.add(1)
    set.add(2)
    set.add(3)
    return 'react \n' + [...set].join('\n')
  }, [])

  return (
    <div id="app">
      <div className="css-style">css</div>
      <div className="less-style">less</div>
      <div className="scss-style">scss</div>
      <div className="stylus-style">stylus</div>
      <div className="text">
        {text} - {count}
      </div>
      <img className="image" src={require('./assets/vue.png')} />
      <div className="image bg-image" />
      <img className="image svg-image" src={svgImg} />
    </div>
  )
}

export default App
