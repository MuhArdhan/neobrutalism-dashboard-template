<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import dayjs from 'dayjs'
import PageHeader from '../components/layout/PageHeader.vue'
import Table from '../components/ui/Table.vue'
import Badge from '../components/ui/Badge.vue'
import Button from '../components/ui/Button.vue'
import Tabs from '../components/ui/Tabs.vue'
import CountdownTimer from '../components/ui/CountdownTimer.vue'
import { Plus, Zap, Edit, Trash2 } from '@lucide/vue'
import { flashSalesData } from '../data'

const router = useRouter()
const activeTab = ref('Active')
const tabs = [
  { label: 'Active', value: 'Active' },
  { label: 'Upcoming', value: 'Upcoming' },
  { label: 'Past', value: 'Past' }
]

const columns = [
  { key: 'name', label: 'Campaign Name' },
  { key: 'products', label: 'Products', align: 'center' as const },
  { key: 'timing', label: 'Timing / Countdown' },
  { key: 'status', label: 'Status' },
  { key: 'actions', label: 'Actions' },
]

const filteredSales = computed(() => {
  return flashSalesData.filter(s => s.status === activeTab.value)
})

const formatTime = (isoString: string) => {
  return dayjs(isoString).format('MMM D, HH:mm')
}
</script>

<template>
  <div class="space-y-6">
    <PageHeader title="Flash Sale Manager" :showBreadcrumb="true">
      <template #actions>
        <Button variant="primary" @click="router.push('/flash-sales/new')">
          <Zap class="w-4 h-4 mr-2" />
          Create Flash Sale
        </Button>
      </template>
    </PageHeader>
    
    <div class="bg-white border-3 border-black shadow-neo rounded-sm p-2 mb-4">
      <Tabs :tabs="tabs" v-model="activeTab" />
    </div>
    
    <Table :columns="columns" :data="filteredSales">
      <template #cell-name="{ row }">
        <span class="font-black text-lg">{{ row.name }}</span>
      </template>
      
      <template #cell-products="{ value }">
        <span class="font-bold bg-muted px-2 py-1 border-2 border-black rounded-sm">{{ value }} items</span>
      </template>
      
      <template #cell-timing="{ row }">
        <div class="space-y-1 py-1">
          <div class="text-xs font-bold text-gray-500">{{ formatTime(row.startTime) }} - {{ formatTime(row.endTime) }}</div>
          <CountdownTimer 
            v-if="row.status === 'Active'" 
            :targetDate="row.endTime" 
            label="Ends in" 
          />
          <CountdownTimer 
            v-else-if="row.status === 'Upcoming'" 
            :targetDate="row.startTime" 
            label="Starts in" 
          />
          <div v-else class="text-sm font-bold text-gray-400 line-through">
            Ended
          </div>
        </div>
      </template>
      
      <template #cell-status="{ value }">
        <Badge 
          :variant="value === 'Active' ? 'success' : value === 'Upcoming' ? 'secondary' : 'danger'"
        >
          <span class="flex items-center gap-1">
            <Zap v-if="value === 'Active'" class="w-3 h-3" />
            {{ value }}
          </span>
        </Badge>
      </template>
      
      <template #cell-actions="{ row }">
        <div class="flex items-center gap-2">
          <Button size="sm" variant="ghost" title="Edit" @click="router.push('/flash-sales/new')">
            <Edit class="w-4 h-4" />
          </Button>
          <Button size="sm" variant="danger" title="Delete">
            <Trash2 class="w-4 h-4" />
          </Button>
        </div>
      </template>
    </Table>
  </div>
</template>
