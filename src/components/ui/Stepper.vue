<script setup lang="ts">
import { computed } from 'vue'
import { Check } from '@lucide/vue'

const props = defineProps({
  steps: {
    type: Array as () => { id: string; label: string }[],
    required: true,
  },
  currentStep: {
    type: Number,
    required: true,
  },
})

defineEmits(['change'])
</script>

<template>
  <div class="flex items-center w-full overflow-x-auto pb-4 pt-2">
    <template v-for="(step, index) in steps" :key="step.id">
      <!-- Step item -->
      <div
        @click="$emit('change', index)"
        class="flex flex-col items-center relative cursor-pointer group px-2"
      >
        <div
          :class="[
            'w-10 h-10 flex items-center justify-center rounded-full border-3 border-black font-black z-10 transition-all',
            index < currentStep
              ? 'bg-primary text-black'
              : index === currentStep
                ? 'bg-black text-white scale-110'
                : 'bg-surface text-gray-400 group-hover:border-gray-500',
          ]"
        >
          <Check v-if="index < currentStep" class="w-5 h-5" stroke-width="4" />
          <span v-else>{{ index + 1 }}</span>
        </div>
        <span
          :class="[
            'text-xs font-bold mt-2 whitespace-nowrap uppercase tracking-wider',
            index <= currentStep ? 'text-black' : 'text-gray-400',
          ]"
        >
          {{ step.label }}
        </span>
      </div>

      <!-- Connector line -->
      <div
        v-if="index < steps.length - 1"
        :class="[
          'flex-1 h-1 mx-2 mt-[-20px] transition-all',
          index < currentStep ? 'bg-primary border-b-[3px] border-black' : 'bg-gray-300',
        ]"
      ></div>
    </template>
  </div>
</template>
