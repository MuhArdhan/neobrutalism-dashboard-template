<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PageHeader from '../components/layout/PageHeader.vue'
import Card from '../components/ui/Card.vue'
import Input from '../components/ui/Input.vue'
import Select from '../components/ui/Select.vue'
import Button from '../components/ui/Button.vue'
import Checkbox from '../components/ui/Checkbox.vue'
import { Save, Calendar } from '@lucide/vue'

const router = useRouter()

const form = ref({
  code: '',
  type: 'Percentage',
  value: '',
  minPurchase: '',
  usageLimit: '',
  startDate: '',
  endDate: '',
  isActive: true,
})

const typeOptions = [
  { value: 'Percentage', label: 'Percentage (%)' },
  { value: 'Fixed Amount', label: 'Fixed Amount ($)' },
  { value: 'Free Shipping', label: 'Free Shipping' },
]

const errors = ref<Record<string, string>>({})

const validateForm = () => {
  errors.value = {}
  let isValid = true

  if (!form.value.code) {
    errors.value.code = 'Coupon code is required'
    isValid = false
  } else if (form.value.code.length < 3) {
    errors.value.code = 'Code must be at least 3 characters'
    isValid = false
  }

  if (form.value.type !== 'Free Shipping' && !form.value.value) {
    errors.value.value = 'Discount value is required'
    isValid = false
  }

  if (!form.value.startDate) {
    errors.value.startDate = 'Start date is required'
    isValid = false
  }

  return isValid
}

const saveCoupon = () => {
  if (!validateForm()) return
  
  alert('Coupon saved successfully! (Mock)')
  router.push('/coupons')
}
</script>

<template>
  <div class="space-y-6 max-w-4xl mx-auto">
    <PageHeader title="Create Coupon" :showBreadcrumb="true">
      <template #actions>
        <Button variant="secondary" @click="router.push('/coupons')">Cancel</Button>
        <Button variant="primary" @click="saveCoupon">
          <Save class="w-4 h-4 mr-2" />
          Save Coupon
        </Button>
      </template>
    </PageHeader>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Main Details -->
      <div class="md:col-span-2 space-y-6">
        <Card title="Coupon Details">
          <div class="space-y-4">
            <Input 
              v-model="form.code" 
              label="Coupon Code" 
              placeholder="e.g. SUMMER2026" 
              helperText="Customers will enter this code at checkout."
              :error="errors.code"
            />
            
            <div class="grid grid-cols-2 gap-4">
              <Select 
                v-model="form.type" 
                :options="typeOptions" 
                label="Discount Type" 
              />
              <Input 
                v-model="form.value" 
                label="Discount Value" 
                :placeholder="form.type === 'Percentage' ? 'e.g. 20' : 'e.g. 15.00'" 
                type="number"
                :disabled="form.type === 'Free Shipping'"
                :error="errors.value"
              />
            </div>
          </div>
        </Card>
        
        <Card title="Usage Limits">
          <div class="space-y-4">
            <Input 
              v-model="form.minPurchase" 
              label="Minimum Purchase Amount ($)" 
              placeholder="e.g. 50.00" 
              type="number"
            />
            <Input 
              v-model="form.usageLimit" 
              label="Maximum Usage per Coupon" 
              placeholder="Leave blank for unlimited" 
              type="number"
            />
          </div>
        </Card>
      </div>
      
      <!-- Right Sidebar -->
      <div class="space-y-6">
        <Card title="Schedule">
          <div class="space-y-4">
            <div>
              <label class="block text-sm font-bold uppercase tracking-wider mb-2">Start Date</label>
              <div class="relative">
                <input 
                  type="date" 
                  v-model="form.startDate" 
                  :class="[
                    'w-full p-3 border-3 rounded-sm outline-none transition-all focus:-translate-y-0.5 focus:-translate-x-0.5 font-bold appearance-none',
                    errors.startDate ? 'border-danger bg-danger/10 shadow-none' : 'border-black bg-surface focus:bg-white focus:shadow-neo-sm'
                  ]"
                >
                <Calendar class="absolute right-3 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
              <span v-if="errors.startDate" class="text-danger font-bold text-xs mt-1 block">{{ errors.startDate }}</span>
            </div>
            
            <div>
              <label class="block text-sm font-bold uppercase tracking-wider mb-2">End Date (Optional)</label>
              <div class="relative">
                <input 
                  type="date" 
                  v-model="form.endDate" 
                  class="w-full p-3 border-3 border-black rounded-sm bg-surface focus:bg-white focus:-translate-y-0.5 focus:-translate-x-0.5 focus:shadow-neo-sm transition-all outline-none font-bold appearance-none"
                >
                <Calendar class="absolute right-3 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </Card>
        
        <Card title="Status">
          <Checkbox v-model="form.isActive" label="Active" />
          <p class="text-xs font-bold text-gray-500 mt-2">Active coupons can be used by customers immediately (if start date is met).</p>
        </Card>
      </div>
    </div>
  </div>
</template>
