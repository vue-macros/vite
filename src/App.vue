<script setup lang="ts">
const foo = defineProp('foo', { default: 'foo' })

let msg = $ref(10)
msg++
</script>

<template>
  <h1>Hello, Vue Macros!</h1>
  {{ foo }}
  {{ msg }}
</template>
