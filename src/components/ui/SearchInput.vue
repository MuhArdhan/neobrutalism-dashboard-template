<script setup lang="ts">
import { Search } from '@lucide/vue'

defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'Search...',
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div class="relative w-full">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-black">
      <Search class="w-5 h-5" />
    </div>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      :placeholder="placeholder"
      class="w-full pl-10 pr-4 py-2 border-3 border-black bg-surface rounded-sm outline-none transition-all shadow-neo-sm focus:shadow-neo focus:-translate-y-0.5 focus:-translate-x-0.5 focus:bg-white"
    />
  </div>
</template>
