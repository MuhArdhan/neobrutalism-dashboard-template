<script setup lang="ts">
import { computed } from 'vue'
import { ChevronLeft, ChevronRight } from '@lucide/vue'

const props = defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  }
})

const emit = defineEmits(['update:currentPage'])

const pages = computed(() => {
  const range = []
  for (let i = 1; i <= props.totalPages; i++) {
    range.push(i)
  }
  return range
})

const goTo = (page: number) => {
  if (page >= 1 && page <= props.totalPages) {
    emit('update:currentPage', page)
  }
}
</script>

<template>
  <div class="flex items-center gap-2">
    <button
      @click="goTo(currentPage - 1)"
      :disabled="currentPage === 1"
      class="p-2 border-3 border-black bg-surface rounded-sm transition-all shadow-neo-sm hover:shadow-neo hover:-translate-y-0.5 disabled:opacity-50 disabled:shadow-none disabled:translate-y-0 disabled:cursor-not-allowed"
    >
      <ChevronLeft class="w-5 h-5" />
    </button>
    
    <button
      v-for="page in pages"
      :key="page"
      @click="goTo(page)"
      :class="[
        'w-10 h-10 flex items-center justify-center font-bold border-3 border-black rounded-sm transition-all',
        page === currentPage 
          ? 'bg-primary shadow-neo -translate-y-0.5' 
          : 'bg-surface shadow-neo-sm hover:shadow-neo hover:-translate-y-0.5'
      ]"
    >
      {{ page }}
    </button>
    
    <button
      @click="goTo(currentPage + 1)"
      :disabled="currentPage === totalPages"
      class="p-2 border-3 border-black bg-surface rounded-sm transition-all shadow-neo-sm hover:shadow-neo hover:-translate-y-0.5 disabled:opacity-50 disabled:shadow-none disabled:translate-y-0 disabled:cursor-not-allowed"
    >
      <ChevronRight class="w-5 h-5" />
    </button>
  </div>
</template>
