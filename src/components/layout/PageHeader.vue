<script setup lang="ts">
import Breadcrumb from './Breadcrumb.vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  showBreadcrumb: {
    type: Boolean,
    default: true,
  }
})
</script>

<template>
  <div class="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
    <div>
      <Breadcrumb v-if="showBreadcrumb" />
      <h1 class="text-3xl md:text-4xl font-black tracking-tight uppercase">{{ title }}</h1>
    </div>
    
    <div v-if="$slots.actions" class="flex flex-wrap items-center gap-3">
      <slot name="actions" />
    </div>
  </div>
</template>
