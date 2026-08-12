<script setup lang="ts">
import { ref, computed } from 'vue'
import PageHeader from '../components/layout/PageHeader.vue'
import Card from '../components/ui/Card.vue'
import Button from '../components/ui/Button.vue'
import Badge from '../components/ui/Badge.vue'
import Table from '../components/ui/Table.vue'
import FilterBar from '../components/ui/FilterBar.vue'
import Pagination from '../components/ui/Pagination.vue'
import Dropdown from '../components/ui/Dropdown.vue'
import Checkbox from '../components/ui/Checkbox.vue'
import { Plus, Download, MoreHorizontal, Edit, Trash2, Copy } from '@lucide/vue'
import { products } from '../data'

const searchQuery = ref('')
const currentPage = ref(1)
const selectedItems = ref<string[]>([])

// Mock pagination
const itemsPerPage = 5
const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage))

const filteredProducts = computed(() => {
  let result = products
  if (searchQuery.value) {
    result = result.filter(p => p.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
  }
  return result
})

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredProducts.value.slice(start, end)
})

const toggleSelectAll = (checked: boolean) => {
  if (checked) {
    selectedItems.value = paginatedProducts.value.map(p => p.id)
  } else {
    selectedItems.value = []
  }
}

const tableCols = [
  { key: 'select', label: '', width: '40px' },
  { key: 'name', label: 'Product Name' },
  { key: 'category', label: 'Category' },
  { key: 'price', label: 'Price', align: 'right' as const },
  { key: 'stock', label: 'Stock', align: 'right' as const },
  { key: 'status', label: 'Status', align: 'center' as const },
  { key: 'actions', label: 'Actions', width: '80px', align: 'center' as const },
]

const getStatusVariant = (status: string) => {
  if (status === 'Active') return 'success'
  if (status === 'Low Stock') return 'warning'
  if (status === 'Out of Stock') return 'danger'
  return 'neutral'
}

const handleAction = (action: string, id: string) => {
  console.log(`Action ${action} on product ${id}`)
}
</script>

<template>
  <div class="space-y-6">
    <PageHeader title="Products">
      <template #actions>
        <Button variant="secondary">
          <Download class="w-4 h-4 mr-2" />
          Export
        </Button>
        <Button variant="primary">
          <Plus class="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </template>
    </PageHeader>
    
    <Card noPadding class="flex flex-col h-full">
      <div class="p-4 border-b-3 border-black bg-white">
        <FilterBar v-model:searchValue="searchQuery" searchPlaceholder="Search products by name..." />
      </div>
      
      <!-- Bulk Actions Bar -->
      <div v-if="selectedItems.length > 0" class="px-6 py-3 bg-secondary border-b-3 border-black flex items-center justify-between">
        <span class="font-bold">{{ selectedItems.length }} items selected</span>
        <div class="flex gap-2">
          <Button variant="danger" size="sm">Delete Selected</Button>
          <Button variant="ghost" size="sm" @click="selectedItems = []">Cancel</Button>
        </div>
      </div>
      
      <!-- Table -->
      <Table :columns="tableCols" :data="paginatedProducts" striped>
        <template #cell-select="{ row }">
          <div class="flex items-center justify-center">
            <Checkbox 
              :modelValue="selectedItems.includes(row.id)" 
              @update:modelValue="(val: boolean) => {
                if (val) selectedItems.push(row.id)
                else selectedItems = selectedItems.filter(id => id !== row.id)
              }" 
            />
          </div>
        </template>
        
        <template #cell-name="{ row }">
          <div>
            <div class="font-black">{{ row.name }}</div>
            <div class="text-xs text-gray-500 font-bold mt-1">{{ row.id }}</div>
          </div>
        </template>
        
        <template #cell-status="{ value }">
          <Badge :variant="getStatusVariant(value)">{{ value }}</Badge>
        </template>
        
        <template #cell-actions="{ row }">
          <Dropdown 
            label="" 
            :items="[
              { label: 'Edit', value: 'edit' },
              { label: 'Duplicate', value: 'duplicate' },
              { label: 'Delete', value: 'delete' }
            ]" 
            @select="handleAction($event, row.id)"
          >
            <template #trigger="{ toggle }">
              <button 
                @click="toggle" 
                class="p-2 border-2 border-transparent hover:border-black rounded-sm transition-colors hover:bg-muted"
                title="Actions"
              >
                <MoreHorizontal class="w-5 h-5 text-black" />
              </button>
            </template>
          </Dropdown>
        </template>
      </Table>
      
      <!-- Pagination -->
      <div class="p-4 border-t-3 border-black bg-white flex justify-end">
        <Pagination v-model:currentPage="currentPage" :totalPages="totalPages" v-if="totalPages > 1" />
      </div>
    </Card>
  </div>
</template>
