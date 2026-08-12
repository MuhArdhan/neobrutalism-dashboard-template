<script setup lang="ts">
import { X } from '@lucide/vue'

defineEmits(['close'])
</script>

<template>
  <aside class="w-64 bg-primary border-r-3 border-black flex flex-col h-full">
    <div class="p-6 border-b-3 border-black flex items-center justify-between">
      <h1 class="text-2xl font-black uppercase tracking-tight">NeoDash</h1>
      <!-- Mobile Close Button -->
      <button
        @click="$emit('close')"
        class="md:hidden p-1 hover:bg-black/10 border-2 border-transparent hover:border-black rounded-sm transition-colors"
      >
        <X class="w-5 h-5 text-black" />
      </button>
    </div>

    <nav class="flex-1 p-4 overflow-y-auto space-y-2">
      <!-- Navigation items -->
      <router-link
        to="/"
        @click="$emit('close')"
        active-class="bg-white border-black shadow-neo -translate-y-0.5"
        class="block px-4 py-3 font-bold border-3 border-transparent hover:border-black hover:bg-white hover:shadow-neo transition-all rounded-sm"
      >
        Dashboard
      </router-link>

      <router-link
        to="/products"
        @click="$emit('close')"
        active-class="bg-white border-black shadow-neo -translate-y-0.5"
        class="block px-4 py-3 font-bold border-3 border-transparent hover:border-black hover:bg-white hover:shadow-neo transition-all rounded-sm"
      >
        Products
      </router-link>

      <router-link
        to="/orders"
        @click="$emit('close')"
        active-class="bg-white border-black shadow-neo -translate-y-0.5"
        class="block px-4 py-3 font-bold border-3 border-transparent hover:border-black hover:bg-white hover:shadow-neo transition-all rounded-sm"
      >
        Orders
      </router-link>

      <router-link 
        to="/customers" 
        @click="$emit('close')"
        active-class="bg-white border-black shadow-neo -translate-y-0.5" 
        class="block px-4 py-3 font-bold border-3 border-transparent hover:border-black hover:bg-white hover:shadow-neo transition-all rounded-sm"
      >
        Customers
      </router-link>

      <div class="h-px bg-black my-2"></div>

      <router-link
        to="/coupons"
        @click="$emit('close')"
        active-class="bg-white border-black shadow-neo -translate-y-0.5"
        class="block px-4 py-3 font-bold border-3 border-transparent hover:border-black hover:bg-white hover:shadow-neo transition-all rounded-sm"
      >
        Coupons
      </router-link>
      
      <div class="h-px bg-black my-2"></div>

      <router-link
        to="/ui-demo"
        @click="$emit('close')"
        active-class="bg-white border-black shadow-neo -translate-y-0.5"
        class="block px-4 py-3 font-bold border-3 border-transparent hover:border-black hover:bg-white hover:shadow-neo transition-all rounded-sm"
      >
        UI Demo
      </router-link>
    </nav>
  </aside>
</template>
