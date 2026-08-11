<script setup lang="ts">
import { computed } from 'vue'
import { X, Info, CheckCircle, AlertTriangle, XCircle } from '@lucide/vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: true,
  },
  title: {
    type: String,
    default: '',
  },
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'info', // info, success, warning, error
  }
})

defineEmits(['close'])

const typeStyles = computed(() => {
  const styles: Record<string, { bg: string, icon: any }> = {
    info: { bg: 'bg-primary', icon: Info },
    success: { bg: 'bg-success', icon: CheckCircle },
    warning: { bg: 'bg-secondary', icon: AlertTriangle },
    error: { bg: 'bg-danger', icon: XCircle },
  }
  return styles[props.type] || styles.info
})
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out transform"
    enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
    enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div 
      v-if="show"
      class="max-w-sm w-full bg-surface border-3 border-black shadow-neo rounded-sm overflow-hidden flex"
    >
      <!-- Indicator Side -->
      <div :class="['w-12 flex items-center justify-center border-r-3 border-black', typeStyles.bg]">
        <component :is="typeStyles.icon" class="w-6 h-6 text-black" stroke-width="2.5" />
      </div>
      
      <!-- Content -->
      <div class="flex-1 p-3">
        <div class="flex items-start justify-between">
          <div>
            <h4 v-if="title" class="text-sm font-black mb-1">{{ title }}</h4>
            <p class="text-sm font-medium text-black">{{ message }}</p>
          </div>
          <button 
            @click="$emit('close')" 
            class="ml-4 flex-shrink-0 text-black hover:bg-black/10 p-1 rounded-sm border-2 border-transparent hover:border-black transition-colors"
          >
            <X class="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>
