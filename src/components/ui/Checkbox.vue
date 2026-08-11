<script setup lang="ts">
import { Check } from '@lucide/vue'

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
    default: '',
  },
  disabled: {
    type: Boolean,
    default: false,
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <label :class="['flex items-center gap-3 cursor-pointer', disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80']">
    <div class="relative flex items-center justify-center w-6 h-6 border-3 border-black bg-white shadow-neo-sm transition-all rounded-sm" :class="[modelValue ? 'bg-primary' : '']">
      <input
        type="checkbox"
        :checked="modelValue"
        @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
        :disabled="disabled"
        class="absolute opacity-0 w-full h-full cursor-pointer"
      />
      <Check v-if="modelValue" class="w-4 h-4 text-black font-black" stroke-width="4" />
    </div>
    <span v-if="label" class="font-bold select-none">{{ label }}</span>
  </label>
</template>
