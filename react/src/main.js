import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import './App.less'

ReactDom.render(<App />, document.getElementById('app'))

console.info(process.env.APP_1)
console.info(process.env.APP_2)
console.info(process.env.APP_3)
