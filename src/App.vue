<script setup lang="ts">
const foo = defineProp('foo', { default: 'foo' })
</script>

<template>
  <h1>Hello, Vue Macros!</h1>
  {{ foo }}
</template>
