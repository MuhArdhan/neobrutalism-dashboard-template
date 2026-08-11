<script setup lang="ts">
defineProps({
  columns: {
    type: Array as () => { key: string; label: string; width?: string; align?: 'left'|'center'|'right' }[],
    required: true,
  },
  data: {
    type: Array as () => Record<string, any>[],
    default: () => [],
  },
  striped: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  }
})
</script>

<template>
  <div class="w-full overflow-x-auto border-3 border-black rounded-sm shadow-neo">
    <table class="w-full text-left border-collapse bg-surface">
      <thead class="bg-primary border-b-3 border-black uppercase text-sm tracking-wider font-black">
        <tr>
          <th 
            v-for="col in columns" 
            :key="col.key"
            :class="[
              'px-6 py-4 border-r-3 border-black last:border-r-0',
              col.align === 'center' ? 'text-center' : col.align === 'right' ? 'text-right' : 'text-left'
            ]"
            :style="{ width: col.width }"
          >
            {{ col.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="loading">
          <td :colspan="columns.length" class="px-6 py-8 text-center font-bold">
            Loading data...
          </td>
        </tr>
        <tr v-else-if="data.length === 0">
          <td :colspan="columns.length" class="px-6 py-8 text-center font-bold text-gray-500">
            No data available.
          </td>
        </tr>
        <tr 
          v-else
          v-for="(row, idx) in data" 
          :key="idx"
          :class="[
            'border-b-3 border-black last:border-b-0 hover:bg-muted transition-colors',
            striped && idx % 2 !== 0 ? 'bg-muted/50' : ''
          ]"
        >
          <td 
            v-for="col in columns" 
            :key="col.key"
            :class="[
              'px-6 py-4 border-r-3 border-black last:border-r-0 font-medium',
              col.align === 'center' ? 'text-center' : col.align === 'right' ? 'text-right' : 'text-left'
            ]"
          >
            <slot :name="`cell-${col.key}`" :row="row" :value="row[col.key]">
              {{ row[col.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
