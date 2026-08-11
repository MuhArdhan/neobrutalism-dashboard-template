<script setup lang="ts">
defineProps({
  modelValue: {
    type: [String, Number],
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
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
      <input
        :type="type"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="[
          'w-full px-4 py-2 border-3 border-black rounded-sm outline-none transition-all shadow-neo-sm focus:shadow-neo focus:-translate-y-0.5 focus:-translate-x-0.5',
          error ? 'bg-danger/10 border-danger' : 'bg-surface focus:bg-white',
          disabled ? 'opacity-50 cursor-not-allowed shadow-none' : ''
        ]"
      />
    </div>
    <span v-if="error" class="text-danger font-bold text-xs">{{ error }}</span>
  </div>
</template>
