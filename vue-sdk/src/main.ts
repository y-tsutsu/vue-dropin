import { createApp, h } from 'vue'
import App from './App.vue'

type Props = {
  enableFoo: boolean
  enableBar: boolean
  enableBaz: boolean
}

function parseBoolean(value: string | undefined): boolean {
  return value === 'true'
}

document.querySelectorAll<HTMLElement>('#vue-sdk').forEach((el) => {
  const props: Props = {
    enableFoo: parseBoolean(el.dataset.enableFoo),
    enableBar: parseBoolean(el.dataset.enableBar),
    enableBaz: parseBoolean(el.dataset.enableBaz)
  }
  createApp({
    render: () => h(App, props)
  }).mount(el)
})
