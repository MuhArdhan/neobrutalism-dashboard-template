<script setup lang="ts">
import { X as XVue } from '@lucide/vue'

defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '',
  }
})

defineEmits(['update:modelValue'])
</script>

<template>
  <div v-if="modelValue" class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
    <!-- Backdrop -->
    <div 
      class="absolute inset-0 bg-black/40 backdrop-blur-sm"
      @click="$emit('update:modelValue', false)"
    ></div>
    
    <!-- Modal Content -->
    <div class="relative w-full max-w-lg bg-surface border-3 border-black shadow-neo rounded-sm flex flex-col max-h-[90vh]">
      <!-- Header -->
      <div class="px-6 py-4 border-b-3 border-black bg-primary flex items-center justify-between">
        <h3 class="font-bold text-lg text-black m-0">{{ title }}</h3>
        <button 
          @click="$emit('update:modelValue', false)"
          class="p-1 hover:bg-black/10 rounded-sm transition-colors border-2 border-transparent hover:border-black"
        >
          <XVue class="w-5 h-5 text-black" />
        </button>
      </div>
      
      <!-- Body -->
      <div class="p-6 overflow-y-auto">
        <slot />
      </div>
      
      <!-- Footer -->
      <div v-if="$slots.footer" class="px-6 py-4 border-t-3 border-black bg-muted">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
