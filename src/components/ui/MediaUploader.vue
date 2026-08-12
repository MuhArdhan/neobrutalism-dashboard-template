<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'
import { UploadCloud, X, GripVertical } from '@lucide/vue'

const props = defineProps({
  modelValue: {
    type: Array as () => { id: string; url: string; name: string }[],
    default: () => [],
  },
  label: {
    type: String,
    default: 'Media',
  },
  maxFiles: {
    type: Number,
    default: 5,
  }
})

const emit = defineEmits(['update:modelValue'])

const isDragging = ref(false)
const fileInput = ref<HTMLInputElement | null>(null)

// In a real app, this would upload to a server and return URLs
// Here we just use createObjectURL for preview
const handleFiles = (files: FileList | File[]) => {
  const newItems = Array.from(files).map((file, index) => ({
    id: `temp-${Date.now()}-${index}`,
    url: URL.createObjectURL(file),
    name: file.name
  }))
  
  const updatedList = [...props.modelValue, ...newItems].slice(0, props.maxFiles)
  emit('update:modelValue', updatedList)
}

const onDrop = (e: DragEvent) => {
  isDragging.value = false
  if (e.dataTransfer?.files) {
    handleFiles(e.dataTransfer.files)
  }
}

const onFileSelect = (e: Event) => {
  const target = e.target as HTMLInputElement
  if (target.files) {
    handleFiles(target.files)
    // reset input
    target.value = ''
  }
}

const removeFile = (idToRemove: string) => {
  emit('update:modelValue', props.modelValue.filter(f => f.id !== idToRemove))
}

const onReorder = (newList: any) => {
  emit('update:modelValue', newList)
}
</script>

<template>
  <div class="flex flex-col gap-2 w-full">
    <div class="flex items-center justify-between">
      <label v-if="label" class="font-bold text-sm">{{ label }}</label>
      <span class="text-xs font-bold text-gray-500">{{ modelValue.length }} / {{ maxFiles }} files</span>
    </div>
    
    <!-- Upload Zone -->
    <div 
      @dragover.prevent="isDragging = true"
      @dragleave.prevent="isDragging = false"
      @drop.prevent="onDrop"
      @click="fileInput?.click()"
      :class="[
        'border-3 border-dashed p-8 rounded-sm flex flex-col items-center justify-center cursor-pointer transition-all',
        isDragging 
          ? 'border-primary bg-primary/10 scale-[1.02]' 
          : 'border-black bg-surface hover:bg-muted hover:shadow-neo-sm'
      ]"
    >
      <UploadCloud class="w-10 h-10 mb-3" :class="isDragging ? 'text-primary' : 'text-black'" stroke-width="1.5" />
      <p class="font-bold text-center mb-1">Click or drag files to upload</p>
      <p class="text-xs text-gray-500 font-medium">SVG, PNG, JPG or GIF (max. 800x400px)</p>
      <input 
        type="file" 
        ref="fileInput" 
        class="hidden" 
        multiple 
        accept="image/*"
        @change="onFileSelect"
      />
    </div>
    
    <!-- Preview & Reorder List -->
    <div v-if="modelValue.length > 0" class="mt-4 space-y-2">
      <p class="text-sm font-bold text-gray-600 mb-2">Drag to reorder (first image is thumbnail)</p>
      
      <draggable 
        :list="modelValue" 
        @update:list="onReorder"
        item-key="id"
        handle=".drag-handle"
        ghost-class="opacity-50"
        animation="200"
      >
        <template #item="{ element, index }">
          <div class="flex items-center gap-3 p-2 bg-white border-3 border-black rounded-sm mb-2 group shadow-neo-sm">
            <div class="drag-handle cursor-move p-1 hover:bg-muted rounded-sm transition-colors text-gray-400 hover:text-black">
              <GripVertical class="w-5 h-5" />
            </div>
            
            <div class="w-12 h-12 border-2 border-black rounded-sm overflow-hidden bg-muted shrink-0 relative">
              <img :src="element.url" class="w-full h-full object-cover" />
              <div v-if="index === 0" class="absolute inset-x-0 bottom-0 bg-primary border-t-2 border-black text-[9px] font-black text-center py-0.5 uppercase tracking-tighter leading-none">
                Cover
              </div>
            </div>
            
            <div class="flex-1 min-w-0">
              <p class="text-sm font-bold truncate">{{ element.name }}</p>
            </div>
            
            <button 
              @click.stop="removeFile(element.id)"
              class="p-2 text-danger hover:bg-danger/10 border-2 border-transparent hover:border-danger rounded-sm transition-colors shrink-0"
              title="Remove file"
            >
              <X class="w-4 h-4" />
            </button>
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>
