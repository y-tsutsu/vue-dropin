import { createApp, h } from 'vue'
import App from './App.vue'
import type { SdkOptions } from './types/options'

const defaultOptions: SdkOptions = {
  title: "This is Vue SDK!!",
  count: 0,
  enableFoo: false,
  enableBar: false,
  enableBaz: false,
}

export function create(selector: string, options: Partial<typeof defaultOptions> = {}) {
  const el = document.querySelector<HTMLElement>(selector)
  if (!el) {
    console.error(`Element not found: ${selector}`)
    return null
  }
  const mergedOptions = { ...defaultOptions, ...options }
  const vm = createApp(App, { options: mergedOptions }).mount(el)
  return {
    setOptions: (newOptions: Partial<SdkOptions>) => {
      (vm as any).setOptions(newOptions)
    }
  }
}
