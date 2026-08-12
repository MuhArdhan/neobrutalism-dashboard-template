<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import PageHeader from '../components/layout/PageHeader.vue'
import Card from '../components/ui/Card.vue'
import Button from '../components/ui/Button.vue'
import Input from '../components/ui/Input.vue'
import Select from '../components/ui/Select.vue'
import Stepper from '../components/ui/Stepper.vue'
import RichTextEditor from '../components/ui/RichTextEditor.vue'
import MediaUploader from '../components/ui/MediaUploader.vue'
import Table from '../components/ui/Table.vue'
import { Save, Plus, Trash2 } from '@lucide/vue'

const router = useRouter()

const steps = [
  { id: 'general', label: 'General' },
  { id: 'media', label: 'Media' },
  { id: 'variants', label: 'Variants' },
  { id: 'seo', label: 'SEO' },
]

const currentStep = ref(0)

// Form State
const formData = ref({
  name: '',
  description: '',
  category: '',
  status: 'Draft',
  media: [],
  variants: [
    { id: '1', size: 'M', color: 'Black', sku: 'PRD-M-BLK', price: 49, stock: 10 }
  ],
  seoTitle: '',
  seoDesc: '',
  slug: ''
})

const categoryOptions = [
  { label: 'Design', value: 'Design' },
  { label: 'Typography', value: 'Typography' },
  { label: 'Assets', value: 'Assets' },
  { label: 'Print', value: 'Print' },
  { label: 'Code', value: 'Code' },
]

const statusOptions = [
  { label: 'Active', value: 'Active' },
  { label: 'Draft', value: 'Draft' },
]

// Handlers
const nextStep = () => {
  if (currentStep.value < steps.length - 1) currentStep.value++
}

const prevStep = () => {
  if (currentStep.value > 0) currentStep.value--
}

const errors = ref<Record<string, string>>({})

const validateForm = () => {
  errors.value = {}
  let isValid = true

  if (!formData.value.name) {
    errors.value.name = 'Product name is required'
    isValid = false
  }
  
  if (formData.value.variants.some(v => !v.price || v.price <= 0)) {
    errors.value.price = 'Valid price is required for all variants'
    isValid = false
  }
  
  if (!formData.value.category) {
    errors.value.category = 'Category is required'
    isValid = false
  }

  return isValid
}

const handleSave = (isDraft = false) => {
  if (!isDraft && !validateForm()) {
    currentStep.value = 0
    return
  }

  formData.value.status = isDraft ? 'Draft' : 'Active'
  console.log('Saving product...', formData.value)
  // Mock API call
  setTimeout(() => {
    router.push('/products')
  }, 500)
}

// Variants
const addVariant = () => {
  formData.value.variants.push({
    id: Date.now().toString(),
    size: '',
    color: '',
    sku: '',
    price: 0,
    stock: 0
  })
}

const removeVariant = (id: string) => {
  formData.value.variants = formData.value.variants.filter(v => v.id !== id)
}
</script>

<template>
  <div class="space-y-6 max-w-5xl mx-auto">
    <PageHeader title="Add Product" :showBreadcrumb="true">
      <template #actions>
        <Button variant="ghost" @click="router.push('/products')">Cancel</Button>
        <Button variant="secondary" @click="handleSave(true)">
          <Save class="w-4 h-4 mr-2" />
          Save Draft
        </Button>
        <Button variant="primary" @click="handleSave(false)">Publish Product</Button>
      </template>
    </PageHeader>
    
    <div class="mb-8">
      <Stepper :steps="steps" :currentStep="currentStep" @change="currentStep = $event" />
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Main Form Area -->
      <div class="lg:col-span-2 space-y-6">
        
        <!-- Step 1: General -->
        <Card v-show="currentStep === 0" title="General Information">
          <div class="space-y-4">
            <Input v-model="formData.name" label="Product Name" placeholder="e.g. Neo-Brutalism UI Kit" :error="errors.name" />
            
            <RichTextEditor v-model="formData.description" label="Description" />
          </div>
        </Card>
        
        <!-- Step 2: Media -->
        <Card v-show="currentStep === 1" title="Product Media">
          <MediaUploader v-model="formData.media" label="Images" :maxFiles="5" />
        </Card>
        
        <!-- Step 3: Variants -->
        <Card v-show="currentStep === 2" title="Variants & Pricing" noPadding>
          <div v-if="errors.price" class="p-3 m-4 bg-danger/10 border-3 border-danger rounded-sm text-danger font-bold">
            {{ errors.price }}
          </div>
          <div class="p-4 border-b-3 border-black flex justify-between items-center bg-white">
            <p class="text-sm font-bold text-gray-600">Manage product variants (size, color, etc.)</p>
            <Button size="sm" variant="secondary" @click="addVariant">
              <Plus class="w-4 h-4 mr-1" /> Add Variant
            </Button>
          </div>
          
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr class="bg-muted border-b-3 border-black text-sm uppercase tracking-wider">
                  <th class="p-3 font-black border-r-3 border-black">Size</th>
                  <th class="p-3 font-black border-r-3 border-black">Color</th>
                  <th class="p-3 font-black border-r-3 border-black">SKU</th>
                  <th class="p-3 font-black border-r-3 border-black w-24">Price ($)</th>
                  <th class="p-3 font-black border-r-3 border-black w-24">Stock</th>
                  <th class="p-3 font-black w-12 text-center"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(variant, index) in formData.variants" :key="variant.id" class="border-b-2 border-black last:border-b-0">
                  <td class="p-2 border-r-3 border-black">
                    <input type="text" v-model="variant.size" class="w-full p-2 border-2 border-transparent focus:border-black bg-surface focus:bg-white rounded-sm outline-none font-bold text-sm transition-colors" placeholder="e.g. M">
                  </td>
                  <td class="p-2 border-r-3 border-black">
                    <input type="text" v-model="variant.color" class="w-full p-2 border-2 border-transparent focus:border-black bg-surface focus:bg-white rounded-sm outline-none font-bold text-sm transition-colors" placeholder="e.g. Black">
                  </td>
                  <td class="p-2 border-r-3 border-black">
                    <input type="text" v-model="variant.sku" class="w-full p-2 border-2 border-transparent focus:border-black bg-surface focus:bg-white rounded-sm outline-none font-bold text-sm transition-colors" placeholder="SKU">
                  </td>
                  <td class="p-2 border-r-3 border-black">
                    <input type="number" v-model="variant.price" class="w-full p-2 border-2 border-transparent focus:border-black bg-surface focus:bg-white rounded-sm outline-none font-bold text-sm transition-colors text-right" placeholder="0.00">
                  </td>
                  <td class="p-2 border-r-3 border-black">
                    <input type="number" v-model="variant.stock" class="w-full p-2 border-2 border-transparent focus:border-black bg-surface focus:bg-white rounded-sm outline-none font-bold text-sm transition-colors text-right" placeholder="0">
                  </td>
                  <td class="p-2 text-center">
                    <button 
                      @click="removeVariant(variant.id)"
                      class="p-2 text-danger hover:bg-danger/10 border-2 border-transparent hover:border-danger rounded-sm transition-colors"
                      :disabled="formData.variants.length === 1"
                      title="Remove variant"
                    >
                      <Trash2 class="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div v-if="formData.variants.length === 0" class="p-8 text-center text-gray-500 font-bold">
              No variants added. Click "Add Variant" to start.
            </div>
          </div>
        </Card>
        
        <!-- Step 4: SEO -->
        <Card v-show="currentStep === 3" title="Search Engine Optimization">
          <div class="space-y-4">
            <Input v-model="formData.seoTitle" label="Meta Title" placeholder="Title for search engines" />
            <div class="flex flex-col gap-1.5">
              <label class="font-bold text-sm">Meta Description</label>
              <textarea 
                v-model="formData.seoDesc"
                rows="3"
                class="w-full p-3 border-3 border-black rounded-sm bg-surface shadow-neo-sm focus:shadow-neo focus:-translate-y-0.5 focus:-translate-x-0.5 transition-all outline-none font-medium resize-none"
                placeholder="Description for search engines"
              ></textarea>
            </div>
            <Input v-model="formData.slug" label="URL Handle (Slug)" placeholder="e.g. neo-brutalism-ui-kit" />
            
            <div class="mt-6 p-4 border-3 border-black bg-muted rounded-sm">
              <p class="text-sm font-bold text-gray-500 mb-2">Search Engine Preview</p>
              <p class="text-lg font-bold text-blue-600 truncate">{{ formData.seoTitle || formData.name || 'Product Title' }}</p>
              <p class="text-sm text-green-700 truncate mb-1">https://neodash.com/products/{{ formData.slug || formData.name.toLowerCase().replace(/\s+/g, '-') || 'product-slug' }}</p>
              <p class="text-sm text-gray-600 line-clamp-2">{{ formData.seoDesc || 'This is how your product will appear in search engine results. Make it compelling!' }}</p>
            </div>
          </div>
        </Card>
        
        <!-- Navigation Buttons -->
        <div class="flex justify-between items-center pt-4">
          <Button 
            variant="secondary" 
            :disabled="currentStep === 0" 
            @click="prevStep"
          >
            Back
          </Button>
          
          <Button 
            v-if="currentStep < steps.length - 1"
            variant="primary" 
            @click="nextStep"
          >
            Next Step
          </Button>
          
          <Button 
            v-else
            variant="primary" 
            @click="handleSave(false)"
          >
            Publish
          </Button>
        </div>
      </div>
      
      <!-- Right Sidebar Area -->
      <div class="space-y-6">
        <Card title="Organization">
          <div class="space-y-4">
            <Select v-model="formData.category" :options="categoryOptions" label="Category" :error="errors.category" />
            <Select v-model="formData.status" :options="statusOptions" label="Status" />
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>
