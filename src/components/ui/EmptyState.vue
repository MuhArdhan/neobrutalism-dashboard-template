<script setup lang="ts">
import { computed } from 'vue'
import { FileQuestion } from '@lucide/vue'

defineProps({
  title: {
    type: String,
    default: 'No Data Found',
  },
  description: {
    type: String,
    default: 'There is nothing to display here at the moment.',
  }
})
</script>

<template>
  <div class="flex flex-col items-center justify-center p-12 bg-surface border-3 border-black border-dashed rounded-sm text-center">
    <div class="w-16 h-16 bg-primary border-3 border-black shadow-neo-sm flex items-center justify-center rounded-sm mb-4">
      <slot name="icon">
        <FileQuestion class="w-8 h-8 text-black" />
      </slot>
    </div>
    <h3 class="text-xl font-black mb-2">{{ title }}</h3>
    <p class="text-gray-600 mb-6 max-w-sm">{{ description }}</p>
    <slot name="action" />
  </div>
</template>
