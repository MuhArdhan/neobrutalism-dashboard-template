<script setup lang="ts">
import { ChevronDown as ChevronDownVue } from '@lucide/vue'

defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  options: {
    type: Array as () => { label: string; value: string | number }[],
    default: () => [],
  },
  placeholder: {
    type: String,
    default: 'Select an option',
  },
  error: {
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
  <div class="flex flex-col gap-1.5 w-full">
    <label v-if="label" class="font-bold text-sm">{{ label }}</label>
    <div class="relative">
      <select
        :value="modelValue"
        @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
        :disabled="disabled"
        :class="[
          'w-full px-4 py-2 pr-10 appearance-none border-3 border-black rounded-sm outline-none transition-all shadow-neo-sm focus:shadow-neo focus:-translate-y-0.5 focus:-translate-x-0.5',
          error ? 'bg-danger/10 border-danger' : 'bg-surface focus:bg-white',
          disabled ? 'opacity-50 cursor-not-allowed shadow-none' : ''
        ]"
      >
        <option value="" disabled>{{ placeholder }}</option>
        <option v-for="opt in options" :key="opt.value" :value="opt.value">
          {{ opt.label }}
        </option>
      </select>
      <div class="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-black">
        <ChevronDownVue class="w-5 h-5" />
      </div>
    </div>
    <span v-if="error" class="text-danger font-bold text-xs">{{ error }}</span>
  </div>
</template>
