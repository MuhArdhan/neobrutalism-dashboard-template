<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import PageHeader from '../components/layout/PageHeader.vue'
import Table from '../components/ui/Table.vue'
import Badge from '../components/ui/Badge.vue'
import Button from '../components/ui/Button.vue'
import FilterBar from '../components/ui/FilterBar.vue'
import { Plus, Copy, Trash2, Edit } from '@lucide/vue'
import { couponsData } from '../data'

const router = useRouter()
const searchValue = ref('')

const columns = [
  { key: 'code', label: 'Coupon Code' },
  { key: 'type', label: 'Type' },
  { key: 'value', label: 'Value', align: 'center' as const },
  { key: 'minPurchase', label: 'Min. Purchase', align: 'right' as const },
  { key: 'usage', label: 'Usage / Limit', align: 'center' as const },
  { key: 'expiry', label: 'Expiry Date' },
  { key: 'status', label: 'Status' },
  { key: 'actions', label: 'Actions' },
]

const filteredCoupons = computed(() => {
  if (!searchValue.value) return couponsData
  const query = searchValue.value.toLowerCase()
  return couponsData.filter(c => c.code.toLowerCase().includes(query))
})

const copyCode = (code: string) => {
  navigator.clipboard.writeText(code)
  alert(`Copied ${code} to clipboard!`)
}
</script>

<template>
  <div class="space-y-6">
    <PageHeader title="Coupons & Discounts" :showBreadcrumb="true">
      <template #actions>
        <Button variant="primary" @click="router.push('/coupons/new')">
          <Plus class="w-4 h-4 mr-2" />
          Create Coupon
        </Button>
      </template>
    </PageHeader>
    
    <div class="bg-white border-3 border-black shadow-neo rounded-sm p-4 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
      <div class="w-full sm:w-96">
        <FilterBar v-model:searchValue="searchValue" searchPlaceholder="Search coupon code..." />
      </div>
    </div>
    
    <Table :columns="columns" :data="filteredCoupons">
      <template #cell-code="{ value }">
        <div class="flex items-center gap-2">
          <span class="font-black font-mono tracking-widest text-lg">{{ value }}</span>
          <button @click="copyCode(value)" class="p-1 hover:bg-muted rounded-sm transition-colors" title="Copy Code">
            <Copy class="w-4 h-4 text-gray-500" />
          </button>
        </div>
      </template>
      
      <template #cell-value="{ row }">
        <span class="font-bold">
          {{ row.type === 'Percentage' ? `${row.value}%` : `$${row.value.toFixed(2)}` }}
        </span>
      </template>
      
      <template #cell-usage="{ value }">
        <span class="font-bold text-gray-600">{{ value }}</span>
      </template>
      
      <template #cell-status="{ value }">
        <Badge 
          :variant="value === 'Active' ? 'primary' : value === 'Scheduled' ? 'secondary' : 'danger'"
        >
          {{ value }}
        </Badge>
      </template>
      
      <template #cell-actions="{ row }">
        <div class="flex items-center gap-2">
          <Button size="sm" variant="ghost" title="Edit" @click="router.push('/coupons/new')">
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
