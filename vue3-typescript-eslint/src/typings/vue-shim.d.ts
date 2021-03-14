declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}

declare module '*.jpg'
declare module '*.png'
declare module '*.svg' {
  const svg = ''
  export default svg
}
