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

  <div>
    <p v-if="enableFoo">Foo 機能が有効</p>
    <p v-if="enableBar">Bar 機能が有効</p>
    <p v-if="enableBaz">Baz 機能が有効</p>
  </div>
</template>

<style scoped></style>
