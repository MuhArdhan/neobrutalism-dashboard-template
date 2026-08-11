<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronDown as ChevronDownVue } from '@lucide/vue'

defineProps({
  label: {
    type: String,
    default: 'Dropdown',
  },
  items: {
    type: Array as () => { label: string; value: string; icon?: any }[],
    default: () => [],
  }
})

defineEmits(['select'])

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const toggle = () => {
  isOpen.value = !isOpen.value
}

const handleClickOutside = (event: MouseEvent) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="relative inline-block text-left" ref="dropdownRef">
    <!-- Trigger -->
    <button
      @click="toggle"
      class="inline-flex items-center justify-between w-full px-4 py-2 font-bold border-3 border-black bg-surface rounded-sm transition-all hover:bg-muted focus:outline-none"
    >
      <span>{{ label }}</span>
      <ChevronDownVue class="w-4 h-4 ml-2" />
    </button>

    <!-- Menu -->
    <div
      v-if="isOpen"
      class="absolute right-0 z-50 w-56 mt-2 origin-top-right bg-surface border-3 border-black rounded-sm shadow-neo"
    >
      <div class="py-1">
        <button
          v-for="item in items"
          :key="item.value"
          @click="$emit('select', item.value); isOpen = false"
          class="flex w-full items-center px-4 py-2 text-sm font-bold border-b-2 border-transparent hover:border-black hover:bg-muted transition-colors text-left"
        >
          <component v-if="item.icon" :is="item.icon" class="w-4 h-4 mr-2" />
          {{ item.label }}
        </button>
      </div>
    </div>
  </div>
</template>
