<script setup lang="ts">
defineProps({
  modelValue: {
    type: [String, Number, Boolean],
    default: '',
  },
  value: {
    type: [String, Number, Boolean],
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  name: {
    type: String,
    required: true,
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
    <div class="relative flex items-center justify-center w-6 h-6 border-3 border-black bg-white rounded-full shadow-neo-sm transition-all" :class="[modelValue === value ? 'border-primary' : '']">
      <input
        type="radio"
        :name="name"
        :value="value"
        :checked="modelValue === value"
        @change="$emit('update:modelValue', value)"
        :disabled="disabled"
        class="absolute opacity-0 w-full h-full cursor-pointer"
      />
      <div v-if="modelValue === value" class="w-3 h-3 bg-primary rounded-full border-2 border-black"></div>
    </div>
    <span v-if="label" class="font-bold select-none">{{ label }}</span>
  </label>
</template>
