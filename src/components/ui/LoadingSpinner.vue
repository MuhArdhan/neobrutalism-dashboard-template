<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'md', // sm, md, lg
  },
  text: {
    type: String,
    default: '',
  }
})

const sizeClasses = computed(() => {
  const sizes: Record<string, string> = {
    sm: 'w-6 h-6 border-4',
    md: 'w-10 h-10 border-4',
    lg: 'w-16 h-16 border-8',
  }
  return sizes[props.size] || sizes.md
})
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <div 
      :class="[
        'animate-spin rounded-full border-black border-r-primary',
        sizeClasses
      ]"
    ></div>
    <span v-if="text" class="font-black animate-pulse">{{ text }}</span>
  </div>
</template>
