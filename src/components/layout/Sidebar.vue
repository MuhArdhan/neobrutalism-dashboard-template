<script setup lang="ts">
// Sidebar placeholder
</script>

<template>
  <aside class="w-64 bg-primary border-r-3 border-black flex flex-col hidden md:flex h-full">
    <div class="p-6 border-b-3 border-black">
      <h1 class="text-2xl font-black uppercase tracking-tight">NeoDash</h1>
    </div>
    <nav class="flex-1 p-4 overflow-y-auto space-y-2">
      <!-- Navigation items placeholder -->
      <router-link to="/" active-class="bg-white border-black shadow-neo" class="block px-4 py-3 font-bold border-3 border-transparent hover:border-black hover:bg-white hover:shadow-neo transition-all rounded-sm">Dashboard</router-link>
      <router-link to="/products" active-class="bg-white border-black shadow-neo" class="block px-4 py-3 font-bold border-3 border-transparent hover:border-black hover:bg-white hover:shadow-neo transition-all rounded-sm">Products</router-link>
      <router-link to="/ui-demo" active-class="bg-white border-black shadow-neo" class="block px-4 py-3 font-bold border-3 border-transparent hover:border-black hover:bg-white hover:shadow-neo transition-all rounded-sm">UI Demo</router-link>
    </nav>
  </aside>
</template>
