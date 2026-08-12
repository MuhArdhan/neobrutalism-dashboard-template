<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import PageHeader from '../components/layout/PageHeader.vue'
import Table from '../components/ui/Table.vue'
import Badge from '../components/ui/Badge.vue'
import Button from '../components/ui/Button.vue'
import FilterBar from '../components/ui/FilterBar.vue'
import { Download, Mail } from '@lucide/vue'
import { customersData } from '../data'

const router = useRouter()
const searchValue = ref('')

const columns = [
  { key: 'name', label: 'Customer Name', sortable: true },
  { key: 'email', label: 'Email' },
  { key: 'orders', label: 'Total Orders', sortable: true },
  { key: 'spent', label: 'Lifetime Value', sortable: true },
  { key: 'status', label: 'Status' },
  { key: 'actions', label: 'Actions' },
]

// Simple filtering logic
const filteredCustomers = computed(() => {
  if (!searchValue.value) return customersData
  const query = searchValue.value.toLowerCase()
  return customersData.filter(c => 
    c.name.toLowerCase().includes(query) || 
    c.email.toLowerCase().includes(query)
  )
})

const viewProfile = (id: string) => {
  router.push(`/customers/${id}`)
}
</script>

<template>
  <div class="space-y-6">
    <PageHeader title="Customer CRM" :showBreadcrumb="true">
      <template #actions>
        <Button variant="secondary">
          <Download class="w-4 h-4 mr-2" />
          Export CSV
        </Button>
      </template>
    </PageHeader>
    
    <div class="bg-white border-3 border-black shadow-neo rounded-sm p-4 flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
      <div class="w-full sm:w-96">
        <FilterBar v-model:searchValue="searchValue" searchPlaceholder="Search name or email..." />
      </div>
      <div class="flex items-center gap-4 text-sm font-bold">
        <span>Total: {{ filteredCustomers.length }} Customers</span>
      </div>
    </div>
    
    <Table :columns="columns" :data="filteredCustomers">
      <template #cell-name="{ row }">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 bg-primary rounded-full border-2 border-black flex items-center justify-center font-black text-sm">
            {{ row.name.charAt(0) }}
          </div>
          <span class="font-bold cursor-pointer hover:underline" @click="viewProfile(row.id)">
            {{ row.name }}
          </span>
        </div>
      </template>
      
      <template #cell-spent="{ value }">
        <span class="font-black">${{ value.toFixed(2) }}</span>
      </template>
      
      <template #cell-status="{ value }">
        <Badge 
          :variant="value === 'VIP' ? 'primary' : value === 'Active' ? 'secondary' : value === 'New' ? 'success' : 'danger'"
        >
          {{ value }}
        </Badge>
      </template>
      
      <template #cell-actions="{ row }">
        <div class="flex items-center gap-2">
          <Button size="sm" variant="ghost" title="Send Email">
            <Mail class="w-4 h-4" />
          </Button>
          <Button size="sm" variant="secondary" @click="viewProfile(row.id)">
            Profile
          </Button>
        </div>
      </template>
    </Table>
  </div>
</template>
