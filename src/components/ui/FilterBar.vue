<script setup lang="ts">
import { Filter } from '@lucide/vue'
import SearchInput from './SearchInput.vue'
import Button from './Button.vue'

defineProps({
  searchValue: {
    type: String,
    default: '',
  },
  searchPlaceholder: {
    type: String,
    default: 'Search...',
  }
})

defineEmits(['update:searchValue', 'filter'])
</script>

<template>
  <div class="flex flex-col sm:flex-row gap-4 items-center justify-between w-full p-4 bg-surface border-3 border-black rounded-sm shadow-neo">
    <div class="w-full sm:max-w-sm">
      <SearchInput 
        :modelValue="searchValue"
        @update:modelValue="$emit('update:searchValue', $event)"
        :placeholder="searchPlaceholder" 
      />
    </div>
    
    <div class="flex items-center gap-4 w-full sm:w-auto">
      <slot name="filters" />
      
      <Button variant="secondary" @click="$emit('filter')" class="flex-shrink-0">
        <Filter class="w-4 h-4 mr-2" />
        Filter
      </Button>
    </div>
  </div>
</template>
