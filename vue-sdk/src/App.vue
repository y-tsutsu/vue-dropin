<script setup lang="ts">
import { reactive } from "vue";
import type { SdkOptions } from './types/options'
import OptionDisplay from "./components/OptionDisplay.vue";

const props = defineProps<{ options: SdkOptions }>()
const options = reactive({ ...props.options })

defineExpose({
  setOptions: (newOptions: Partial<SdkOptions>) => {
    Object.assign(options, newOptions)
  }
})
</script>

<template>
  <h1>{{ options.title }}</h1>

  <h2>ようこそ，Vue製のSDK！</h2>
  <p id="message">これはシンプルなサンプルです {{ options.count }} 🐣</p>

  <OptionDisplay v-bind="props" />
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
</style>
