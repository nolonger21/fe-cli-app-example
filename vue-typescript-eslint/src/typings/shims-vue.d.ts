declare module '*.vue' {
  import Vue, { ComponentOptions } from 'vue'
  const component: ComponentOptions<Vue>
  export default component
}
declare module '*.jpg'
declare module '*.png'
declare module '*.svg' {
  const svg = ''
  export default svg
}
