<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary', // primary, secondary, danger, ghost
  },
  size: {
    type: String,
    default: 'md', // sm, md, lg
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String as () => 'button' | 'submit' | 'reset',
    default: 'button'
  }
})

const classes = computed(() => {
  const base = 'inline-flex items-center justify-center font-bold border-3 border-black rounded-sm transition-all focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2'
  
  const variants: Record<string, string> = {
    primary: 'bg-primary text-black shadow-neo hover:shadow-neo-sm hover:translate-x-[2px] hover:translate-y-[2px]',
    secondary: 'bg-secondary text-black shadow-neo hover:shadow-neo-sm hover:translate-x-[2px] hover:translate-y-[2px]',
    danger: 'bg-danger text-black shadow-neo hover:shadow-neo-sm hover:translate-x-[2px] hover:translate-y-[2px]',
    ghost: 'bg-transparent border-transparent hover:border-black hover:bg-muted shadow-none',
  }
  
  const sizes: Record<string, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }
  
  return [
    base,
    variants[props.variant] || variants.primary,
    sizes[props.size] || sizes.md,
    props.block ? 'w-full flex' : '',
    props.disabled ? 'opacity-50 cursor-not-allowed pointer-events-none shadow-none translate-x-[4px] translate-y-[4px]' : ''
  ].join(' ')
})
</script>

<template>
  <button :type="type" :class="classes" :disabled="disabled">
    <slot />
  </button>
</template>
