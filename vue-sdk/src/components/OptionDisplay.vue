<script setup lang="ts">
import { reactive } from "vue";
import type { SdkOptions } from '../types/options'
const props = defineProps<{ options: SdkOptions }>()
const options = reactive({ ...props.options })
</script>

<template>
  <div>
    <p v-if="options.enableFoo">Foo 機能が有効です 🍾</p>
    <p v-if="options.enableBar">Bar 機能が有効です 🍷</p>
    <p v-if="options.enableBaz">Baz 機能が有効です 🍺</p>
  </div>
</template>

<style scoped>
p {
  text-align: center;
  color: #5eb954
}
</style>
