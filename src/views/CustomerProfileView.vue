<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PageHeader from '../components/layout/PageHeader.vue'
import Card from '../components/ui/Card.vue'
import Button from '../components/ui/Button.vue'
import Badge from '../components/ui/Badge.vue'
import { Mail, Phone, MapPin, Calendar, ShoppingBag, TrendingUp, Send } from '@lucide/vue'

const route = useRoute()
const router = useRouter()
const customerId = route.params.id as string || 'CUST-001'

// Mock Data
const customer = ref({
  id: customerId,
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 987-654-3210',
  address: '456 Cyber Avenue, Block 9\nNeo City, NY 10002\nUnited States',
  joinDate: 'Jan 15, 2025',
  status: 'VIP',
  stats: {
    totalOrders: 12,
    lifetimeValue: 1450.00,
    averageOrderValue: 120.83,
    lastActive: '2 days ago'
  },
  recentOrders: [
    { id: 'ORD-1001', date: '2026-08-10', items: 3, total: 145.00, status: 'Pending' },
    { id: 'ORD-0922', date: '2026-07-28', items: 1, total: 89.00, status: 'Delivered' },
    { id: 'ORD-0850', date: '2026-06-15', items: 5, total: 420.50, status: 'Delivered' },
    { id: 'ORD-0711', date: '2026-05-02', items: 2, total: 115.00, status: 'Delivered' },
  ]
})

const emailSubject = ref('')
const emailMessage = ref('')
const isSending = ref(false)

const sendEmail = () => {
  if (!emailSubject.value || !emailMessage.value) return
  isSending.value = true
  setTimeout(() => {
    isSending.value = false
    emailSubject.value = ''
    emailMessage.value = ''
    alert('Email sent successfully! (Mock)')
  }, 1000)
}
</script>

<template>
  <div class="space-y-6 max-w-6xl mx-auto">
    <PageHeader :title="`Customer Profile`" :showBreadcrumb="true">
      <template #actions>
        <Button variant="secondary" @click="router.push('/customers')">Back to List</Button>
      </template>
    </PageHeader>
    
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Left Column: Profile Card -->
      <div class="space-y-6">
        <Card noPadding class="overflow-hidden">
          <div class="bg-primary h-24 border-b-3 border-black relative">
            <div class="absolute -bottom-10 left-6 w-20 h-20 bg-white rounded-full border-3 border-black flex items-center justify-center font-black text-3xl shadow-neo-sm">
              {{ customer.name.charAt(0) }}
            </div>
          </div>
          <div class="p-6 pt-14">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h2 class="text-2xl font-black">{{ customer.name }}</h2>
                <p class="text-sm font-bold text-gray-500">{{ customer.id }}</p>
              </div>
              <Badge :variant="customer.status === 'VIP' ? 'primary' : 'secondary'">{{ customer.status }}</Badge>
            </div>
            
            <div class="space-y-4 mt-6">
              <div class="flex items-center gap-3">
                <Mail class="w-4 h-4 text-gray-500" />
                <span class="font-bold text-sm">{{ customer.email }}</span>
              </div>
              <div class="flex items-center gap-3">
                <Phone class="w-4 h-4 text-gray-500" />
                <span class="font-bold text-sm">{{ customer.phone }}</span>
              </div>
              <div class="flex items-start gap-3">
                <MapPin class="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
                <span class="font-bold text-sm whitespace-pre-line">{{ customer.address }}</span>
              </div>
              <div class="flex items-center gap-3 pt-4 border-t-2 border-black border-dashed">
                <Calendar class="w-4 h-4 text-gray-500" />
                <span class="font-bold text-sm text-gray-600">Customer since {{ customer.joinDate }}</span>
              </div>
            </div>
          </div>
        </Card>
        
        <Card title="Quick Contact">
          <div class="space-y-4">
            <div>
              <label class="text-xs font-bold uppercase tracking-wider mb-1 block">Subject</label>
              <input type="text" v-model="emailSubject" class="w-full p-2 border-3 border-black rounded-sm bg-surface focus:bg-white focus:-translate-y-0.5 focus:-translate-x-0.5 focus:shadow-neo-sm transition-all outline-none font-bold" placeholder="Message subject">
            </div>
            <div>
              <label class="text-xs font-bold uppercase tracking-wider mb-1 block">Message</label>
              <textarea v-model="emailMessage" rows="4" class="w-full p-2 border-3 border-black rounded-sm bg-surface focus:bg-white focus:-translate-y-0.5 focus:-translate-x-0.5 focus:shadow-neo-sm transition-all outline-none font-bold resize-none" placeholder="Type your message here..."></textarea>
            </div>
            <Button variant="primary" class="w-full" @click="sendEmail" :disabled="!emailSubject || !emailMessage || isSending">
              <Send class="w-4 h-4 mr-2" />
              {{ isSending ? 'Sending...' : 'Send Email' }}
            </Button>
          </div>
        </Card>
      </div>
      
      <!-- Right Column: Stats & History -->
      <div class="lg:col-span-2 space-y-6">
        
        <!-- LTV Stats -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Card class="bg-yellow-300">
            <div class="flex items-center justify-between mb-2">
              <p class="font-bold uppercase text-xs tracking-wider">Total Orders</p>
              <ShoppingBag class="w-4 h-4" />
            </div>
            <p class="text-3xl font-black">{{ customer.stats.totalOrders }}</p>
          </Card>
          
          <Card class="bg-green-400">
            <div class="flex items-center justify-between mb-2">
              <p class="font-bold uppercase text-xs tracking-wider">Lifetime Value</p>
              <TrendingUp class="w-4 h-4" />
            </div>
            <p class="text-3xl font-black">${{ customer.stats.lifetimeValue.toFixed(2) }}</p>
          </Card>
          
          <Card class="bg-blue-300">
            <div class="flex items-center justify-between mb-2">
              <p class="font-bold uppercase text-xs tracking-wider">Avg Order Value</p>
              <TrendingUp class="w-4 h-4" />
            </div>
            <p class="text-3xl font-black">${{ customer.stats.averageOrderValue.toFixed(2) }}</p>
          </Card>
        </div>
        
        <!-- Order History -->
        <Card title="Order History" noPadding>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="bg-muted border-b-3 border-black text-sm uppercase tracking-wider">
                  <th class="p-4 font-black border-r-3 border-black">Order ID</th>
                  <th class="p-4 font-black border-r-3 border-black">Date</th>
                  <th class="p-4 font-black border-r-3 border-black text-center">Items</th>
                  <th class="p-4 font-black border-r-3 border-black text-right">Total</th>
                  <th class="p-4 font-black">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="order in customer.recentOrders" :key="order.id" class="border-b-3 border-black last:border-0 hover:bg-muted/50 transition-colors cursor-pointer" @click="router.push(`/orders/${order.id}`)">
                  <td class="p-4 border-r-3 border-black font-black underline">{{ order.id }}</td>
                  <td class="p-4 border-r-3 border-black font-bold text-sm">{{ order.date }}</td>
                  <td class="p-4 border-r-3 border-black text-center font-black">{{ order.items }}</td>
                  <td class="p-4 border-r-3 border-black text-right font-black">${{ order.total.toFixed(2) }}</td>
                  <td class="p-4">
                    <Badge 
                      :variant="order.status === 'Pending' ? 'secondary' : order.status === 'Delivered' ? 'success' : 'primary'"
                    >
                      {{ order.status }}
                    </Badge>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
        
      </div>
    </div>
  </div>
</template>
