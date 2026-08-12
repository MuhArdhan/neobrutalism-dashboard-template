<script setup lang="ts">
import { ref } from 'vue'
import { Palette } from '@lucide/vue'

const isExpanded = ref(false)

const themes = [
  { name: 'Pink', primary: '#FF90E8', secondary: '#FFD000', bg: '#FFF9E6' },
  { name: 'Yellow', primary: '#FFD000', secondary: '#FF90E8', bg: '#FDFBF7' },
  { name: 'Green', primary: '#4ade80', secondary: '#FFD000', bg: '#F0FFF4' },
  { name: 'Cyan', primary: '#22d3ee', secondary: '#FF90E8', bg: '#F0FFFF' },
]

const changeTheme = (theme: typeof themes[0]) => {
  document.documentElement.style.setProperty('--color-primary', theme.primary)
  document.documentElement.style.setProperty('--color-secondary', theme.secondary)
  document.documentElement.style.setProperty('--color-background', theme.bg)
  isExpanded.value = false
}
</script>

<template>
  <div class="fixed bottom-6 right-6 z-50 print:hidden flex flex-col items-end gap-2">
    <!-- Theme Palette Menu -->
    <div 
      v-if="isExpanded" 
      class="bg-white border-3 border-black p-3 rounded-sm shadow-neo flex flex-col gap-2"
    >
      <button
        v-for="theme in themes"
        :key="theme.name"
        @click="changeTheme(theme)"
        class="flex items-center gap-3 p-2 hover:bg-muted border-2 border-transparent hover:border-black rounded-sm transition-all"
        :title="`Switch to ${theme.name} Theme`"
      >
        <div class="w-6 h-6 border-2 border-black rounded-full shadow-neo-sm" :style="{ backgroundColor: theme.primary }"></div>
        <span class="font-bold text-sm">{{ theme.name }}</span>
      </button>
    </div>

    <!-- Toggle Button -->
    <button 
      @click="isExpanded = !isExpanded"
      class="w-14 h-14 bg-black text-white flex items-center justify-center rounded-sm shadow-neo border-3 border-black hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(255,144,232,1)] transition-all active:translate-y-0 active:translate-x-0 active:shadow-none"
      title="Theme Switcher"
    >
      <Palette class="w-6 h-6" />
    </button>
  </div>
</template>
