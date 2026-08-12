<script setup lang="ts">
import { ref } from 'vue'
import PageHeader from '../components/layout/PageHeader.vue'
import Card from '../components/ui/Card.vue'
import Badge from '../components/ui/Badge.vue'
import Table from '../components/ui/Table.vue'
import Select from '../components/ui/Select.vue'
import { dashboardMetrics, topProducts, activityFeed, salesChartData } from '../data'

import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { TrendingUp, TrendingDown, DollarSign, Users, ShoppingCart, Activity, ArrowUpRight } from '@lucide/vue'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        font: {
          family: "'Inter', sans-serif",
          weight: 'bold' as const,
        },
        color: '#000'
      }
    },
    tooltip: {
      backgroundColor: '#000',
      titleFont: { family: "'Inter', sans-serif", weight: 'bold' as const },
      bodyFont: { family: "'Inter', sans-serif" },
      padding: 12,
      cornerRadius: 0,
    }
  },
  scales: {
    y: {
      border: { color: '#000', width: 3 },
      grid: { color: '#e5e7eb' },
      ticks: { color: '#000', font: { weight: 'bold' as const } }
    },
    x: {
      border: { color: '#000', width: 3 },
      grid: { display: false },
      ticks: { color: '#000', font: { weight: 'bold' as const } }
    }
  }
}

const tableCols = [
  { key: 'name', label: 'Product' },
  { key: 'sales', label: 'Sales', align: 'right' as const },
  { key: 'revenue', label: 'Revenue', align: 'right' as const },
  { key: 'status', label: 'Status', align: 'center' as const },
]

const periodFilter = ref('7d')
const filterOptions = [
  { label: 'Last 7 Days', value: '7d' },
  { label: 'Last 30 Days', value: '30d' },
  { label: 'This Year', value: '1y' },
]

const getIconForMetric = (id: string) => {
  if (id === 'total_revenue') return DollarSign
  if (id === 'subscriptions') return Users
  if (id === 'sales') return ShoppingCart
  return Activity
}
</script>

<template>
  <div class="space-y-6">
    <PageHeader title="Dashboard">
      <template #actions>
        <button class="px-4 py-2 bg-primary font-bold border-3 border-black shadow-neo hover:shadow-neo-sm hover:translate-x-[2px] hover:translate-y-[2px] transition-all rounded-sm flex items-center">
          Download Report
          <ArrowUpRight class="w-4 h-4 ml-2" />
        </button>
      </template>
    </PageHeader>
    
    <!-- Top Level Metrics -->
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      <div 
        v-for="metric in dashboardMetrics" 
        :key="metric.id"
        class="bg-white p-6 border-3 border-black shadow-neo rounded-sm flex flex-col relative overflow-hidden group"
      >
        <div class="flex justify-between items-start mb-4">
          <p class="font-bold text-gray-600">{{ metric.title }}</p>
          <div class="p-2 bg-muted border-2 border-black rounded-sm group-hover:bg-primary transition-colors">
            <component :is="getIconForMetric(metric.id)" class="w-5 h-5 text-black" stroke-width="2.5" />
          </div>
        </div>
        <h3 class="text-3xl font-black mb-2 tracking-tight">{{ metric.value }}</h3>
        <div class="flex items-center text-sm font-bold mt-auto pt-2">
          <span :class="[metric.isPositive ? 'text-green-600' : 'text-danger', 'flex items-center']">
            <TrendingUp v-if="metric.isPositive" class="w-4 h-4 mr-1" stroke-width="3" />
            <TrendingDown v-else class="w-4 h-4 mr-1" stroke-width="3" />
            {{ metric.trend }}
          </span>
          <span class="text-gray-500 ml-2 font-medium">from last month</span>
        </div>
      </div>
    </div>
    
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <!-- Sales Analytics Chart -->
      <Card class="xl:col-span-2">
        <template #header>
          <div class="flex flex-col sm:flex-row sm:items-center justify-between w-full gap-4">
            <h3 class="font-black text-xl m-0 uppercase tracking-tight">Sales Analytics</h3>
            <div class="w-full sm:w-48">
              <Select v-model="periodFilter" :options="filterOptions" />
            </div>
          </div>
        </template>
        <div class="h-[350px] w-full pt-4">
          <Bar :data="salesChartData" :options="chartOptions" />
        </div>
      </Card>
      
      <!-- Live Activity Feed -->
      <Card title="LIVE ACTIVITY" class="xl:col-span-1 flex flex-col h-full">
        <div class="overflow-y-auto max-h-[350px] pr-2 -mr-2">
          <div class="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-black before:border-l-[3px] before:border-black before:opacity-20 before:z-0">
            <div v-for="(activity, index) in activityFeed" :key="activity.id" class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <!-- Timeline Marker -->
              <div class="flex items-center justify-center w-10 h-10 rounded-full border-3 border-black bg-white shadow-neo-sm text-black shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform hover:scale-110">
                <Activity class="w-4 h-4" v-if="activity.type === 'system'" />
                <ShoppingCart class="w-4 h-4" v-else-if="activity.type === 'purchase'" />
                <DollarSign class="w-4 h-4" v-else-if="activity.type === 'refund'" />
                <Users class="w-4 h-4" v-else />
              </div>
              
              <!-- Content -->
              <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface border-3 border-black p-3 rounded-sm shadow-neo-sm hover:shadow-neo hover:-translate-y-1 transition-all z-10">
                <div class="flex items-center justify-between mb-1">
                  <span class="font-black text-sm">{{ activity.user }}</span>
                  <time class="text-xs font-bold text-gray-500">{{ activity.time }}</time>
                </div>
                <p class="text-sm">
                  <span class="text-gray-600">{{ activity.action }}</span> 
                  <span class="font-bold"> {{ activity.target }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
    
    <!-- Top Selling Products Table -->
    <Card title="TOP SELLING PRODUCTS" noPadding>
      <Table :columns="tableCols" :data="topProducts" striped>
        <template #cell-status="{ value }">
          <Badge 
            :variant="value === 'In Stock' ? 'success' : value === 'Low Stock' ? 'warning' : 'danger'"
          >
            {{ value }}
          </Badge>
        </template>
      </Table>
    </Card>
  </div>
</template>
