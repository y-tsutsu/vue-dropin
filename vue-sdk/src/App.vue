<script setup lang="ts">
import { ref } from "vue";

const title = ref("This is Vue SDK!!")

defineProps({
  enableFoo: Boolean,
  enableBar: Boolean,
  enableBaz: Boolean
})
</script>

<template>
  <h1>{{ title }}</h1>

  <h2>ようこそ，Vue製のSDK！</h2>
  <p id="message">これはシンプルなサンプルです 🐣</p>

  <div>
    <p v-if="enableFoo">Foo 機能が有効です 🍾</p>
    <p v-if="enableBar">Bar 機能が有効です 🍷</p>
    <p v-if="enableBaz">Baz 機能が有効です 🍺</p>
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
