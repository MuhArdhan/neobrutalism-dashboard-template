<script setup lang="ts">
import { ref } from 'vue'
import { Menu, Bell } from '@lucide/vue'
import SearchInput from '../ui/SearchInput.vue'
import Dropdown from '../ui/Dropdown.vue'
import Avatar from '../ui/Avatar.vue'

defineEmits(['toggle-sidebar'])

const searchQuery = ref('')

const userMenuItems = [
  { label: 'Profile', value: 'profile' },
  { label: 'Settings', value: 'settings' },
  { label: 'Logout', value: 'logout' },
]

const handleUserAction = (action: string) => {
  console.log('User action:', action)
}
</script>

<template>
  <header class="h-16 bg-surface border-b-3 border-black flex items-center justify-between px-4 md:px-6 sticky top-0 z-10 gap-4">
    <!-- Left Section: Mobile Menu & Search -->
    <div class="flex items-center gap-4 flex-1">
      <button 
        @click="$emit('toggle-sidebar')"
        class="md:hidden p-2 hover:bg-muted border-2 border-transparent hover:border-black rounded-sm transition-colors"
      >
        <Menu class="w-6 h-6" />
      </button>
      
      <!-- Search Input (Hidden on very small screens) -->
      <div class="hidden sm:block max-w-sm w-full">
        <SearchInput v-model="searchQuery" placeholder="Search anything..." />
      </div>
    </div>
    
    <!-- Right Section: Actions & Profile -->
    <div class="flex items-center gap-3 md:gap-4 flex-shrink-0">
      <!-- Search toggle for mobile -->
      <button class="sm:hidden p-2 hover:bg-muted border-2 border-transparent hover:border-black rounded-sm transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      </button>

      <!-- Notifications -->
      <button class="relative p-2 bg-secondary border-3 border-black shadow-neo-sm hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all rounded-sm">
        <Bell class="w-5 h-5" />
        <span class="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-danger border-2 border-black text-[10px] font-black text-white">
          3
        </span>
      </button>
      
      <!-- User Menu -->
      <div class="w-40 hidden md:block">
        <Dropdown label="Admin User" :items="userMenuItems" @select="handleUserAction" />
      </div>
      
      <!-- Mobile User Menu / Avatar -->
      <div class="md:hidden">
        <Avatar size="sm" shape="circle" class="cursor-pointer" />
      </div>
    </div>
  </header>
</template>
