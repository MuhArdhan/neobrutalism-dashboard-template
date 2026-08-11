<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from './Sidebar.vue'
import Topbar from './Topbar.vue'

const isMobileSidebarOpen = ref(false)

const toggleMobileSidebar = () => {
  isMobileSidebarOpen.value = !isMobileSidebarOpen.value
}
</script>

<template>
  <div class="flex h-screen overflow-hidden bg-background">
    <!-- Desktop Sidebar -->
    <Sidebar class="hidden md:flex" />

    <!-- Mobile Sidebar Drawer -->
    <div 
      v-if="isMobileSidebarOpen" 
      class="fixed inset-0 z-40 flex md:hidden"
    >
      <!-- Backdrop -->
      <div 
        class="fixed inset-0 bg-black/50 backdrop-blur-sm"
        @click="isMobileSidebarOpen = false"
      ></div>
      
      <!-- Drawer Content -->
      <Sidebar class="relative flex w-64 max-w-xs bg-primary flex-col z-50 h-full" @close="isMobileSidebarOpen = false" />
    </div>

    <!-- Main Content -->
    <div class="flex flex-col flex-1 overflow-hidden">
      <Topbar @toggle-sidebar="toggleMobileSidebar" />
      <main class="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
        <slot />
      </main>
    </div>
  </div>
</template>
