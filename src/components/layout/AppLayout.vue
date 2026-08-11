<script setup lang="ts">
import Sidebar from './Sidebar.vue'
import Topbar from './Topbar.vue'
</script>

<template>
  <div class="flex h-screen overflow-hidden bg-background">
    <Sidebar />
    <div class="flex flex-col flex-1 overflow-hidden">
      <Topbar />
      <main class="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
        <slot />
      </main>
    </div>
  </div>
</template>
