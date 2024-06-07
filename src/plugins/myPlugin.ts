import type { App } from 'vue'
import Button from './components/Button.vue'
import type { Pinia } from 'pinia'

type Options = {
  pinia?: Pinia
}
export default {
  install(app: App<Element>, options: Options) {
    app.component('MyButton', Button)
    app.directive('focus', {
      mounted(el) {
        el.focus()
      }
    })
  }
}
