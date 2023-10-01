<script setup>

import {layer} from 'vue3-layer'
import { onMounted } from 'vue'

onMounted(()=>{
  layer.msg('hello')
})

</script>

<template>
  <main>
    <el-button type="primary">
      摩羯阿婆
    </el-button>
  </main>
</template>
