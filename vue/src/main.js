import vue from 'vue'
import App from './App.vue'

window.vm = new vue({
  el: '#app',
  render: (h) => h(App),
})

console.log(process.env.APP_1)
console.log(process.env.APP_2)
console.log(process.env.APP_3)
