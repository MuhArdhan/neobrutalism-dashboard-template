<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: false,
  },
  noPadding: {
    type: Boolean,
    default: false,
  }
})
</script>

<template>
  <div class="bg-surface border-3 border-black shadow-neo rounded-sm flex flex-col overflow-hidden">
    <!-- Header -->
    <div v-if="title || $slots.header" class="px-6 py-4 border-b-3 border-black bg-white flex items-center justify-between">
      <h3 v-if="title" class="font-bold text-lg m-0">{{ title }}</h3>
      <slot name="header" />
    </div>
    
    <!-- Body -->
    <div :class="[noPadding ? '' : 'p-6', 'flex-1']">
      <slot />
    </div>
    
    <!-- Footer -->
    <div v-if="$slots.footer" class="px-6 py-4 border-t-3 border-black bg-muted">
      <slot name="footer" />
    </div>
  </div>
</template>
