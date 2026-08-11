<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps({
  tabs: {
    type: Array as () => { label: string; value: string }[],
    required: true,
  },
  modelValue: {
    type: String,
    default: '',
  }
})

const emit = defineEmits(['update:modelValue'])

const activeTab = ref(props.modelValue || (props.tabs.length > 0 ? props.tabs[0].value : ''))

watch(() => props.modelValue, (newVal) => {
  if (newVal) activeTab.value = newVal
})

const selectTab = (value: string) => {
  activeTab.value = value
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="w-full">
    <div class="flex flex-wrap gap-2 mb-4 border-b-3 border-black pb-2">
      <button
        v-for="tab in tabs"
        :key="tab.value"
        @click="selectTab(tab.value)"
        :class="[
          'px-4 py-2 font-bold border-3 transition-all rounded-sm',
          activeTab === tab.value 
            ? 'bg-primary border-black shadow-neo -translate-y-1' 
            : 'bg-surface border-transparent hover:border-black hover:bg-white hover:shadow-neo-sm'
        ]"
      >
        {{ tab.label }}
      </button>
    </div>
    
    <div class="py-2">
      <slot :name="activeTab" />
    </div>
  </div>
</template>
