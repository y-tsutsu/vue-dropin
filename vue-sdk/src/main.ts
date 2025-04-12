import { createApp, h } from 'vue'
import App from './App.vue'

const defaultOptions = {
  enableFoo: false,
  enableBar: false,
  enableBaz: false,
}

export function initialize(selector: string, options: Partial<typeof defaultOptions> = {}) {
  const mergedOptions = { ...defaultOptions, ...options }
  document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
    createApp(App, mergedOptions).mount(el)
  });
}
