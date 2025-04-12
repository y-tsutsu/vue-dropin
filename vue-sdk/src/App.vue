<script setup lang="ts">
import { ref } from "vue";
import type { SdkOptions } from './options'

const title = ref("This is Vue SDK!!")

const props = defineProps<{ options: SdkOptions }>()
const options = ref({ ...props.options })

defineExpose({
  setOptions: (newOptions: Partial<SdkOptions>) => {
    options.value = { ...options.value, ...newOptions }
  }
})
</script>

<template>
  <h1>{{ options.title }}</h1>

  <h2>ようこそ，Vue製のSDK！</h2>
  <p id="message">これはシンプルなサンプルです {{ options.count }} 🐣</p>

  <div>
    <p v-if="options.enableFoo">Foo 機能が有効です 🍾</p>
    <p v-if="options.enableBar">Bar 機能が有効です 🍷</p>
    <p v-if="options.enableBaz">Baz 機能が有効です 🍺</p>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  color: #812990;
}

h2 {
  text-align: center;
  color: #7cc7e8;
}

p {
  text-align: center;
}

P#message {
  color: #5eb954
}
</style>
