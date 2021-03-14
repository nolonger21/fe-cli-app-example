import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import test from './aa.js'


test()

ReactDom.render(<App />, document.getElementById('app'))

console.info(process.env.APP_1)





console.info(process.env.APP_2)


console.info(process.env.APP_3)

window.a = 1


Object.assign({}, {a:1})