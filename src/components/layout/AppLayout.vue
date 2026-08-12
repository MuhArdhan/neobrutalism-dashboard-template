<script setup lang="ts">
import { ref } from 'vue'
import Sidebar from './Sidebar.vue'
import Topbar from './Topbar.vue'
import ThemeSwitcher from '../ui/ThemeSwitcher.vue'

const isMobileSidebarOpen = ref(false)

const toggleMobileSidebar = () => {
  isMobileSidebarOpen.value = !isMobileSidebarOpen.value
}
</script>

<template>
  <div class="flex h-screen overflow-hidden bg-background">
    <!-- Desktop Sidebar -->
    <Sidebar class="hidden md:flex print:hidden" />

    <!-- Mobile Sidebar Drawer -->
    <div v-if="isMobileSidebarOpen" class="fixed inset-0 z-40 flex md:hidden print:hidden">
      <!-- Backdrop -->
      <div
        class="fixed inset-0 bg-black/50 backdrop-blur-sm"
        @click="isMobileSidebarOpen = false"
      ></div>

      <!-- Drawer Content -->
      <Sidebar
        class="relative flex w-64 max-w-xs bg-primary flex-col z-50 h-full"
        @close="isMobileSidebarOpen = false"
      />
    </div>

    <!-- Main Content -->
    <div class="flex flex-col flex-1 overflow-hidden print:overflow-visible">
      <Topbar class="print:hidden" @toggle-sidebar="toggleMobileSidebar" />
      <main class="flex-1 overflow-y-auto print:overflow-visible p-4 md:p-6 lg:p-8 flex flex-col">
        <slot />
      </main>
    </div>

    <!-- Global Theme Switcher -->
    <ThemeSwitcher />
  </div>
</template>
