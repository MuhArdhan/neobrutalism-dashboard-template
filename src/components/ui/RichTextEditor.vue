<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { Bold, Italic, List, ListOrdered, Heading1, Heading2, Quote, Undo, Redo } from '@lucide/vue'
import { watch, onBeforeUnmount } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: 'Description',
  },
  error: {
    type: String,
    default: '',
  }
})

const emit = defineEmits(['update:modelValue'])

const editor = useEditor({
  content: props.modelValue,
  extensions: [
    StarterKit,
  ],
  editorProps: {
    attributes: {
      class: 'prose prose-sm sm:prose-base focus:outline-none min-h-[150px] max-h-[300px] overflow-y-auto p-4',
    },
  },
  onUpdate: () => {
    emit('update:modelValue', editor.value?.getHTML())
  },
})

watch(() => props.modelValue, (value) => {
  const isSame = editor.value?.getHTML() === value
  if (isSame) return
  editor.value?.commands.setContent(value, false)
})

onBeforeUnmount(() => {
  editor.value?.destroy()
})
</script>

<template>
  <div class="flex flex-col gap-1.5 w-full">
    <label v-if="label" class="font-bold text-sm">{{ label }}</label>
    
    <div :class="[
      'flex flex-col border-3 border-black rounded-sm shadow-neo-sm overflow-hidden bg-surface transition-colors',
      error ? 'border-danger' : 'focus-within:bg-white focus-within:shadow-neo focus-within:-translate-y-0.5 focus-within:-translate-x-0.5'
    ]">
      <!-- Toolbar -->
      <div v-if="editor" class="flex flex-wrap items-center gap-1 p-2 border-b-3 border-black bg-muted">
        <button @click="editor.chain().focus().toggleBold().run()" :class="['p-1.5 rounded-sm hover:bg-black/10 transition-colors', { 'bg-black text-white hover:bg-black/80': editor.isActive('bold') }]" title="Bold">
          <Bold class="w-4 h-4" />
        </button>
        <button @click="editor.chain().focus().toggleItalic().run()" :class="['p-1.5 rounded-sm hover:bg-black/10 transition-colors', { 'bg-black text-white hover:bg-black/80': editor.isActive('italic') }]" title="Italic">
          <Italic class="w-4 h-4" />
        </button>
        
        <div class="w-px h-4 bg-black mx-1"></div>
        
        <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="['p-1.5 rounded-sm hover:bg-black/10 transition-colors', { 'bg-black text-white hover:bg-black/80': editor.isActive('heading', { level: 1 }) }]" title="Heading 1">
          <Heading1 class="w-4 h-4" />
        </button>
        <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="['p-1.5 rounded-sm hover:bg-black/10 transition-colors', { 'bg-black text-white hover:bg-black/80': editor.isActive('heading', { level: 2 }) }]" title="Heading 2">
          <Heading2 class="w-4 h-4" />
        </button>
        
        <div class="w-px h-4 bg-black mx-1"></div>
        
        <button @click="editor.chain().focus().toggleBulletList().run()" :class="['p-1.5 rounded-sm hover:bg-black/10 transition-colors', { 'bg-black text-white hover:bg-black/80': editor.isActive('bulletList') }]" title="Bullet List">
          <List class="w-4 h-4" />
        </button>
        <button @click="editor.chain().focus().toggleOrderedList().run()" :class="['p-1.5 rounded-sm hover:bg-black/10 transition-colors', { 'bg-black text-white hover:bg-black/80': editor.isActive('orderedList') }]" title="Numbered List">
          <ListOrdered class="w-4 h-4" />
        </button>
        <button @click="editor.chain().focus().toggleBlockquote().run()" :class="['p-1.5 rounded-sm hover:bg-black/10 transition-colors', { 'bg-black text-white hover:bg-black/80': editor.isActive('blockquote') }]" title="Quote">
          <Quote class="w-4 h-4" />
        </button>
        
        <div class="w-px h-4 bg-black mx-1"></div>
        
        <button @click="editor.chain().focus().undo().run()" :disabled="!editor.can().undo()" class="p-1.5 rounded-sm hover:bg-black/10 transition-colors disabled:opacity-50" title="Undo">
          <Undo class="w-4 h-4" />
        </button>
        <button @click="editor.chain().focus().redo().run()" :disabled="!editor.can().redo()" class="p-1.5 rounded-sm hover:bg-black/10 transition-colors disabled:opacity-50" title="Redo">
          <Redo class="w-4 h-4" />
        </button>
      </div>
      
      <!-- Editor -->
      <editor-content :editor="editor" class="bg-white" />
    </div>
    <span v-if="error" class="text-danger font-bold text-xs">{{ error }}</span>
  </div>
</template>

<style>
/* TipTap Prose overrides for Neo-Brutalism if needed */
.ProseMirror p {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.ProseMirror h1 {
  font-size: 1.5rem;
  font-weight: 900;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
}
.ProseMirror h2 {
  font-size: 1.25rem;
  font-weight: 900;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
.ProseMirror ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
}
.ProseMirror ol {
  list-style-type: decimal;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
}
.ProseMirror blockquote {
  border-left: 4px solid black;
  padding-left: 1rem;
  font-style: italic;
  background-color: #f4f4f5; /* muted */
  padding: 0.5rem 1rem;
}
</style>
