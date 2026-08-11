<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { ChevronRight, Home } from '@lucide/vue'

const route = useRoute()

// Simple breadcrumb generator based on route path
const breadcrumbs = computed(() => {
  const pathArray = route.path.split('/').filter(p => p)
  if (pathArray.length === 0) return []
  
  const crumbs = []
  let currentPath = ''
  
  for (const path of pathArray) {
    currentPath += `/${path}`
    crumbs.push({
      label: path.charAt(0).toUpperCase() + path.slice(1).replace(/-/g, ' '),
      to: currentPath
    })
  }
  
  return crumbs
})
</script>

<template>
  <nav class="flex items-center text-sm font-bold mb-4 overflow-x-auto whitespace-nowrap pb-2" aria-label="Breadcrumb">
    <ol class="inline-flex items-center space-x-1 md:space-x-2">
      <li class="inline-flex items-center">
        <router-link to="/" class="inline-flex items-center text-black hover:opacity-70 transition-opacity">
          <Home class="w-4 h-4 mr-2" />
          Home
        </router-link>
      </li>
      <li v-for="(crumb, index) in breadcrumbs" :key="crumb.to">
        <div class="flex items-center">
          <ChevronRight class="w-4 h-4 mx-1" />
          <router-link 
            :to="crumb.to" 
            :class="[
              'ml-1 text-black hover:opacity-70 transition-opacity',
              index === breadcrumbs.length - 1 ? 'border-b-2 border-black' : ''
            ]"
          >
            {{ crumb.label }}
          </router-link>
        </div>
      </li>
    </ol>
  </nav>
</template>
