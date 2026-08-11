<script setup lang="ts">
import { computed } from 'vue'
import { User } from '@lucide/vue'

const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: 'User Avatar',
  },
  size: {
    type: String,
    default: 'md', // sm, md, lg, xl
  },
  shape: {
    type: String,
    default: 'square', // square, circle
  }
})

const sizeClasses = computed(() => {
  const sizes: Record<string, string> = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  }
  return sizes[props.size] || sizes.md
})

const shapeClass = computed(() => props.shape === 'circle' ? 'rounded-full' : 'rounded-sm')
</script>

<template>
  <div 
    :class="[
      'inline-flex items-center justify-center border-3 border-black bg-secondary shadow-neo-sm overflow-hidden flex-shrink-0',
      sizeClasses,
      shapeClass
    ]"
  >
    <img v-if="src" :src="src" :alt="alt" class="w-full h-full object-cover" />
    <User v-else class="w-1/2 h-1/2 text-black" />
  </div>
</template>
