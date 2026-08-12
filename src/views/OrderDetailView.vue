<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PageHeader from '../components/layout/PageHeader.vue'
import Card from '../components/ui/Card.vue'
import Button from '../components/ui/Button.vue'
import Badge from '../components/ui/Badge.vue'
import { Printer, Check, Clock, Package, MapPin, Mail, Phone, CreditCard } from '@lucide/vue'

const route = useRoute()
const router = useRouter()

const orderId = route.params.id as string || 'ORD-1001'

// Mock Data
const order = ref({
  id: orderId,
  status: 'Processing',
  date: '2026-08-11 14:30',
  customer: {
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+1 234-567-8901',
    address: '123 Brutal Street, Apartment 4B\nNeo City, NY 10001\nUnited States'
  },
  items: [
    { id: 'PRD-010', name: 'Cyberpunk Font', qty: 1, price: 25.00 },
    { id: 'PRD-002', name: 'UI Vector Icons', qty: 2, price: 32.00 }
  ],
  subtotal: 89.00,
  shipping: 10.00,
  tax: 5.50,
  total: 104.50,
  paymentMethod: 'Visa ending in 4242'
})

const timeline = [
  { status: 'Order Placed', time: 'Aug 11, 2026 14:30', completed: true },
  { status: 'Payment Confirmed', time: 'Aug 11, 2026 14:32', completed: true },
  { status: 'Processing', time: 'Aug 11, 2026 15:00', completed: true },
  { status: 'Shipped', time: 'Pending', completed: false },
  { status: 'Delivered', time: 'Pending', completed: false },
]

const printInvoice = () => {
  window.print()
}
</script>

<template>
  <div class="space-y-6 max-w-6xl mx-auto">
    <PageHeader :title="`Order ${order.id}`" :showBreadcrumb="true">
      <template #actions>
        <Button variant="secondary" @click="router.push('/orders')">Back to Orders</Button>
        <Button variant="primary" @click="printInvoice">
          <Printer class="w-4 h-4 mr-2" />
          Print Invoice
        </Button>
      </template>
    </PageHeader>
    
    <div class="flex flex-col lg:flex-row gap-6">
      
      <!-- Main Column: Items & Customer Info -->
      <div class="flex-1 space-y-6">
        
        <!-- Ordered Items -->
        <Card title="Ordered Items" noPadding>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-muted border-b-3 border-black text-sm uppercase tracking-wider">
                  <th class="p-4 font-black border-r-3 border-black">Item</th>
                  <th class="p-4 font-black border-r-3 border-black w-24 text-center">Qty</th>
                  <th class="p-4 font-black border-r-3 border-black w-32 text-right">Price</th>
                  <th class="p-4 font-black w-32 text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in order.items" :key="item.id" class="border-b-3 border-black last:border-0 hover:bg-muted/50 transition-colors">
                  <td class="p-4 border-r-3 border-black">
                    <p class="font-bold">{{ item.name }}</p>
                    <p class="text-xs text-gray-500 font-bold">{{ item.id }}</p>
                  </td>
                  <td class="p-4 border-r-3 border-black text-center font-black">
                    {{ item.qty }}
                  </td>
                  <td class="p-4 border-r-3 border-black text-right font-medium">
                    ${{ item.price.toFixed(2) }}
                  </td>
                  <td class="p-4 text-right font-black">
                    ${{ (item.price * item.qty).toFixed(2) }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <!-- Totals -->
          <div class="p-4 bg-muted border-t-3 border-black">
            <div class="flex justify-end">
              <div class="w-64 space-y-2">
                <div class="flex justify-between text-sm font-bold">
                  <span>Subtotal</span>
                  <span>${{ order.subtotal.toFixed(2) }}</span>
                </div>
                <div class="flex justify-between text-sm font-bold">
                  <span>Shipping</span>
                  <span>${{ order.shipping.toFixed(2) }}</span>
                </div>
                <div class="flex justify-between text-sm font-bold">
                  <span>Tax</span>
                  <span>${{ order.tax.toFixed(2) }}</span>
                </div>
                <div class="flex justify-between pt-2 border-t-2 border-black border-dashed text-lg font-black mt-2">
                  <span>Total</span>
                  <span>${{ order.total.toFixed(2) }}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
        
        <!-- Customer Info Grid -->
        <Card title="Customer & Shipping Details">
          <div class="grid grid-cols-1 sm:grid-cols-2 print:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <div class="p-2 bg-primary rounded-full border-2 border-black">
                  <Mail class="w-4 h-4 text-black" />
                </div>
                <div>
                  <p class="text-xs font-bold text-gray-500 uppercase tracking-wider">Email</p>
                  <p class="font-bold">{{ order.customer.email }}</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="p-2 bg-primary rounded-full border-2 border-black">
                  <Phone class="w-4 h-4 text-black" />
                </div>
                <div>
                  <p class="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone</p>
                  <p class="font-bold">{{ order.customer.phone }}</p>
                </div>
              </div>
            </div>
            
            <div class="space-y-4 border-t-2 sm:border-t-0 sm:border-l-2 print:border-t-0 print:border-l-2 border-black pt-4 sm:pt-0 sm:pl-6 print:pt-0 print:pl-6 border-dashed">
              <div class="flex items-start gap-3">
                <div class="p-2 bg-yellow-300 rounded-full border-2 border-black">
                  <MapPin class="w-4 h-4 text-black" />
                </div>
                <div>
                  <p class="text-xs font-bold text-gray-500 uppercase tracking-wider">Shipping Address</p>
                  <p class="font-bold">{{ order.customer.name }}</p>
                  <p class="font-medium mt-1 whitespace-pre-line text-sm leading-relaxed text-gray-700">
                    {{ order.customer.address }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
      
      <!-- Right Column: Status & Timeline -->
      <div class="w-full lg:w-80 shrink-0 space-y-6 print:hidden">
        
        <Card title="Order Status">
          <div class="flex items-center justify-between mb-6">
            <Badge 
              :variant="order.status === 'Processing' ? 'secondary' : order.status === 'Shipped' ? 'danger' : 'primary'"
              class="text-sm px-3 py-1"
            >
              {{ order.status }}
            </Badge>
            <span class="text-xs font-bold text-gray-500">{{ order.date }}</span>
          </div>
          
          <div class="pt-4 border-t-3 border-black">
            <div class="flex items-center gap-3">
              <CreditCard class="w-5 h-5 text-gray-600" />
              <div>
                <p class="text-xs font-bold text-gray-500 uppercase">Payment Method</p>
                <p class="font-bold">{{ order.paymentMethod }}</p>
              </div>
            </div>
          </div>
        </Card>
        
        <Card title="Timeline">
          <div class="relative pl-6 space-y-6 before:absolute before:inset-y-0 before:left-[11px] before:w-1 before:bg-black py-2">
            
            <div v-for="(step, i) in timeline" :key="i" class="relative">
              <!-- Node -->
              <div 
                class="absolute left-[-24px] w-6 h-6 rounded-full border-3 border-black flex items-center justify-center z-10"
                :class="step.completed ? 'bg-primary' : 'bg-surface'"
              >
                <Check v-if="step.completed" class="w-3 h-3 text-black" stroke-width="4" />
                <Clock v-else class="w-3 h-3 text-gray-400" />
              </div>
              
              <!-- Content -->
              <div class="pl-2">
                <p class="font-bold" :class="step.completed ? 'text-black' : 'text-gray-400'">{{ step.status }}</p>
                <p class="text-xs font-bold text-gray-500 mt-1">{{ step.time }}</p>
              </div>
            </div>
            
          </div>
        </Card>
        
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Print styles for Invoice */
@media print {
  /* Hide buttons during print */
  button {
    display: none !important;
  }
  .shadow-neo, .shadow-neo-sm {
    box-shadow: none !important;
  }
}
</style>
