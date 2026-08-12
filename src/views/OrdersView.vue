<script setup lang="ts">
import { ref, computed } from 'vue'
import draggable from 'vuedraggable'
import PageHeader from '../components/layout/PageHeader.vue'
import FilterBar from '../components/ui/FilterBar.vue'
import Badge from '../components/ui/Badge.vue'
import { MoreHorizontal, Calendar, Package } from '@lucide/vue'
import { ordersData } from '../data'

const searchQuery = ref('')

// Initialize columns from mock data
const columns = ref([
  {
    id: 'Pending',
    title: 'Pending',
    color: 'bg-yellow-300',
    items: ordersData.filter((o) => o.status === 'Pending'),
  },
  {
    id: 'Processing',
    title: 'Processing',
    color: 'bg-blue-300',
    items: ordersData.filter((o) => o.status === 'Processing'),
  },
  {
    id: 'Shipped',
    title: 'Shipped',
    color: 'bg-purple-300',
    items: ordersData.filter((o) => o.status === 'Shipped'),
  },
  {
    id: 'Delivered',
    title: 'Delivered',
    color: 'bg-green-400',
    items: ordersData.filter((o) => o.status === 'Delivered'),
  },
])

// A computed property could be used if we wanted search to actively filter the board without losing items,
// but for a Kanban board where you drag things, it's easier to just visually hide them or keep the state simple.
// We'll visually filter items in the template.

const checkSearchMatch = (item: any) => {
  if (!searchQuery.value) return true
  const query = searchQuery.value.toLowerCase()
  return item.id.toLowerCase().includes(query) || item.customer.toLowerCase().includes(query)
}

const onEnd = (evt: any) => {
  console.log('Item dropped', evt)
  // Here we would ideally update the status of the item that was dragged
}
</script>

<template>
  <div class="space-y-6 h-full flex flex-col">
    <PageHeader title="Orders & Fulfillment" :showBreadcrumb="true" />

    <div
      class="bg-white border-3 border-black shadow-neo rounded-sm p-4 shrink-0 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center"
    >
      <div class="w-full sm:w-96">
        <FilterBar
          v-model:searchValue="searchQuery"
          searchPlaceholder="Search order ID or customer..."
        />
      </div>
      <div class="flex items-center gap-4 text-sm font-bold">
        <span>Total Orders: {{ ordersData.length }}</span>
      </div>
    </div>

    <!-- Kanban Board -->
    <div class="flex-1 overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
      <div class="flex gap-6 h-full min-h-[500px] items-start min-w-max w-full">
        <!-- Column -->
        <div
          v-for="col in columns"
          :key="col.id"
          class="flex flex-col min-w-[280px] sm:min-w-[320px] flex-1 shrink-0 h-full bg-surface border-3 border-black rounded-sm shadow-neo"
        >
          <!-- Column Header -->
          <div
            :class="['p-3 border-b-3 border-black flex justify-between items-center', col.color]"
          >
            <h3 class="font-black uppercase tracking-tight">{{ col.title }}</h3>
            <div
              class="w-6 h-6 bg-white border-2 border-black rounded-full flex items-center justify-center text-xs font-black"
            >
              {{ col.items.length }}
            </div>
          </div>

          <!-- Column Body (Draggable Area) -->
          <div class="p-3 flex-1 overflow-y-auto bg-muted">
            <draggable
              class="min-h-[100px] h-full space-y-3"
              v-model="col.items"
              group="orders"
              item-key="id"
              ghost-class="opacity-50"
              @end="onEnd"
            >
              <template #item="{ element }">
                <div
                  v-show="checkSearchMatch(element)"
                  class="bg-white border-3 border-black p-4 rounded-sm shadow-neo-sm hover:shadow-neo hover:-translate-y-1 transition-all cursor-move group relative"
                >
                  <!-- Card Header -->
                  <div class="flex justify-between items-start mb-2">
                    <span class="font-black">{{ element.id }}</span>
                    <button
                      class="text-gray-400 hover:text-black transition-colors"
                      title="Quick actions"
                    >
                      <MoreHorizontal class="w-5 h-5" />
                    </button>
                  </div>

                  <!-- Card Body -->
                  <div class="space-y-1 mb-3">
                    <p class="font-bold text-sm">{{ element.customer }}</p>
                    <div class="flex items-center text-xs text-gray-500 font-bold">
                      <Calendar class="w-3 h-3 mr-1" />
                      {{ element.date }}
                    </div>
                  </div>

                  <!-- Card Footer -->
                  <div
                    class="flex justify-between items-center pt-3 border-t-2 border-black border-dashed"
                  >
                    <div class="flex items-center text-sm font-bold">
                      <Package class="w-4 h-4 mr-1" />
                      {{ element.items }} items
                    </div>
                    <span class="font-black">{{ element.total }}</span>
                  </div>
                </div>
              </template>
            </draggable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
