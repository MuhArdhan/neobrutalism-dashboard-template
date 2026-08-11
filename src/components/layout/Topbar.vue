<script setup lang="ts">
import { Menu, Bell, User } from '@lucide/vue'
// using @lucide/vue as per current version
</script>

<template>
  <header class="h-16 bg-surface border-b-3 border-black flex items-center justify-between px-6 sticky top-0 z-10">
    <div class="flex items-center gap-4">
      <button class="md:hidden p-2 hover:bg-muted border-2 border-transparent hover:border-black rounded-sm transition-colors">
        <Menu class="w-6 h-6" />
      </button>
      <div class="font-bold text-lg hidden md:block">
        Welcome back, Admin
      </div>
    </div>
    
    <div class="flex items-center gap-4">
      <button class="p-2 bg-secondary border-3 border-black shadow-neo-sm hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all rounded-sm">
        <Bell class="w-5 h-5" />
      </button>
      <button class="p-2 bg-primary border-3 border-black shadow-neo-sm hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all rounded-sm flex items-center gap-2">
        <User class="w-5 h-5" />
      </button>
    </div>
  </header>
</template>
