<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary', // primary, success, danger, warning, neutral
  }
})

const classes = computed(() => {
  const base = 'inline-flex items-center px-2.5 py-0.5 text-xs font-bold border-2 border-black rounded-sm uppercase tracking-wider'
  
  const variants: Record<string, string> = {
    primary: 'bg-primary text-black shadow-neo-sm',
    success: 'bg-success text-black shadow-neo-sm',
    danger: 'bg-danger text-black shadow-neo-sm',
    warning: 'bg-secondary text-black shadow-neo-sm',
    neutral: 'bg-muted text-black shadow-neo-sm',
  }
  
  return [base, variants[props.variant] || variants.neutral].join(' ')
})
</script>

<template>
  <span :class="classes">
    <slot />
  </span>
</template>
