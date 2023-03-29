<script setup>
import TheWelcome from '../components/TheWelcome.vue'

import {layer} from 'vue3-layer'
import { onMounted } from 'vue'

onMounted(()=>{
  layer.msg('hello')
})

</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
