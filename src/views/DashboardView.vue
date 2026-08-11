<script setup lang="ts">
import PageHeader from '../components/layout/PageHeader.vue'
</script>

<template>
  <div class="space-y-6">
    <PageHeader title="Dashboard">
      <template #actions>
        <button class="px-4 py-2 bg-primary font-bold border-3 border-black shadow-neo hover:shadow-neo-sm hover:translate-x-[2px] hover:translate-y-[2px] transition-all rounded-sm">
          Download Report
        </button>
      </template>
    </PageHeader>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-white p-6 border-3 border-black shadow-neo rounded-sm">
        <h3 class="text-lg font-bold mb-2">Total Sales</h3>
        <p class="text-3xl font-black">$24,500</p>
      </div>
      <div class="bg-white p-6 border-3 border-black shadow-neo rounded-sm">
        <h3 class="text-lg font-bold mb-2">Active Orders</h3>
        <p class="text-3xl font-black">142</p>
      </div>
      <div class="bg-white p-6 border-3 border-black shadow-neo rounded-sm">
        <h3 class="text-lg font-bold mb-2">Customers</h3>
        <p class="text-3xl font-black">1,204</p>
      </div>
      <div class="bg-white p-6 border-3 border-black shadow-neo rounded-sm">
        <h3 class="text-lg font-bold mb-2">Conversion</h3>
        <p class="text-3xl font-black">3.2%</p>
      </div>
    </div>
  </div>
</template>
