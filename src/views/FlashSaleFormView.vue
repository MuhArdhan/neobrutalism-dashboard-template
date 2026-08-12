<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PageHeader from '../components/layout/PageHeader.vue'
import Card from '../components/ui/Card.vue'
import Input from '../components/ui/Input.vue'
import Button from '../components/ui/Button.vue'
import Checkbox from '../components/ui/Checkbox.vue'
import { Save, Zap } from '@lucide/vue'
import { products } from '../data'

const router = useRouter()

const form = ref({
  name: '',
  startTime: '',
  endTime: '',
  isActive: true,
})

const selectedProducts = ref<string[]>([])
const globalDiscount = ref('20')

const toggleProduct = (id: string) => {
  const idx = selectedProducts.value.indexOf(id)
  if (idx > -1) {
    selectedProducts.value.splice(idx, 1)
  } else {
    selectedProducts.value.push(id)
  }
}

const errors = ref<Record<string, string>>({})

const validateForm = () => {
  errors.value = {}
  let isValid = true

  if (!form.value.name) {
    errors.value.name = 'Campaign name is required'
    isValid = false
  }

  if (!form.value.startTime) {
    errors.value.startTime = 'Start time is required'
    isValid = false
  }

  if (!form.value.endTime) {
    errors.value.endTime = 'End time is required'
    isValid = false
  } else if (new Date(form.value.endTime) <= new Date(form.value.startTime)) {
    errors.value.endTime = 'End time must be after start time'
    isValid = false
  }

  if (selectedProducts.value.length === 0) {
    errors.value.products = 'Please select at least one product'
    isValid = false
  }

  return isValid
}

const saveFlashSale = () => {
  if (!validateForm()) return
  
  alert('Flash Sale scheduled successfully! (Mock)')
  router.push('/flash-sales')
}
</script>

<template>
  <div class="space-y-6 max-w-5xl mx-auto">
    <PageHeader title="Create Flash Sale" :showBreadcrumb="true">
      <template #actions>
        <Button variant="secondary" @click="router.push('/flash-sales')">Cancel</Button>
        <Button variant="primary" @click="saveFlashSale">
          <Save class="w-4 h-4 mr-2" />
          Save Campaign
        </Button>
      </template>
    </PageHeader>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Left Column: Settings -->
      <div class="lg:col-span-1 space-y-6">
        <Card title="Campaign Details">
          <div class="space-y-4">
            <Input 
              v-model="form.name" 
              label="Campaign Name" 
              placeholder="e.g. Midnight Madness" 
              :error="errors.name"
            />
            
            <div>
              <label class="block text-sm font-bold uppercase tracking-wider mb-2">Start Time</label>
              <input 
                type="datetime-local" 
                v-model="form.startTime" 
                :class="[
                  'w-full p-3 border-3 rounded-sm outline-none transition-all focus:-translate-y-0.5 focus:-translate-x-0.5 font-bold',
                  errors.startTime ? 'border-danger bg-danger/10 shadow-none' : 'border-black bg-surface focus:bg-white focus:shadow-neo-sm'
                ]"
              >
              <span v-if="errors.startTime" class="text-danger font-bold text-xs mt-1 block">{{ errors.startTime }}</span>
            </div>
            
            <div>
              <label class="block text-sm font-bold uppercase tracking-wider mb-2">End Time</label>
              <input 
                type="datetime-local" 
                v-model="form.endTime" 
                :class="[
                  'w-full p-3 border-3 rounded-sm outline-none transition-all focus:-translate-y-0.5 focus:-translate-x-0.5 font-bold',
                  errors.endTime ? 'border-danger bg-danger/10 shadow-none' : 'border-black bg-surface focus:bg-white focus:shadow-neo-sm'
                ]"
              >
              <span v-if="errors.endTime" class="text-danger font-bold text-xs mt-1 block">{{ errors.endTime }}</span>
            </div>
            
            <div class="pt-4 border-t-3 border-black border-dashed">
              <Checkbox v-model="form.isActive" label="Enable Campaign" />
            </div>
          </div>
        </Card>
      </div>
      
      <!-- Right Column: Products Selection -->
      <div class="lg:col-span-2 space-y-6">
        <Card title="Product Selection & Pricing">
          <div v-if="errors.products" class="mb-4 p-3 bg-danger/10 border-3 border-danger rounded-sm text-danger font-bold">
            {{ errors.products }}
          </div>
          <div class="flex gap-4 items-end mb-6">
            <div class="flex-1">
              <Input 
                v-model="globalDiscount" 
                label="Global Discount (%)" 
                type="number"
                helperText="Applies to all selected products below."
              />
            </div>
            <Button variant="secondary" class="mb-5 h-[52px]">Apply to All</Button>
          </div>
          
          <div class="border-3 border-black rounded-sm overflow-hidden bg-surface">
            <div class="max-h-96 overflow-y-auto p-4 space-y-2">
              <div 
                v-for="product in products" 
                :key="product.id"
                class="flex items-center justify-between p-3 border-2 border-black rounded-sm bg-white hover:bg-muted/30 transition-colors cursor-pointer"
                @click="toggleProduct(product.id)"
              >
                <div class="flex items-center gap-3">
                  <div class="w-5 h-5 border-2 border-black flex items-center justify-center bg-white shrink-0">
                    <div v-if="selectedProducts.includes(product.id)" class="w-3 h-3 bg-black"></div>
                  </div>
                  <div>
                    <p class="font-bold">{{ product.name }}</p>
                    <p class="text-xs font-bold text-gray-500">{{ product.category }} • {{ product.stock }} in stock</p>
                  </div>
                </div>
                
                <div class="text-right">
                  <p class="font-black line-through text-gray-400 text-sm">{{ product.price }}</p>
                  <p class="font-black text-red-500 flex items-center gap-1 justify-end">
                    <Zap class="w-3 h-3" />
                    ${{ (parseFloat(product.price.replace('$', '')) * (1 - parseInt(globalDiscount)/100)).toFixed(2) }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4 text-sm font-bold flex justify-between">
            <span>{{ selectedProducts.length }} products selected</span>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>
