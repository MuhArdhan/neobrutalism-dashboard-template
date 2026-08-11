<script setup lang="ts">
import { ref } from 'vue'
import Button from '../components/ui/Button.vue'
import Card from '../components/ui/Card.vue'
import Input from '../components/ui/Input.vue'
import Badge from '../components/ui/Badge.vue'
import Textarea from '../components/ui/Textarea.vue'
import Select from '../components/ui/Select.vue'
import Checkbox from '../components/ui/Checkbox.vue'
import Radio from '../components/ui/Radio.vue'
import Modal from '../components/ui/Modal.vue'
import Table from '../components/ui/Table.vue'
import Tabs from '../components/ui/Tabs.vue'
import Avatar from '../components/ui/Avatar.vue'
import Dropdown from '../components/ui/Dropdown.vue'
import Toast from '../components/ui/Toast.vue'
import LoadingSpinner from '../components/ui/LoadingSpinner.vue'
import Pagination from '../components/ui/Pagination.vue'
import FilterBar from '../components/ui/FilterBar.vue'
import EmptyState from '../components/ui/EmptyState.vue'

const textValue = ref('')
const selectValue = ref('')
const checkboxValue = ref(false)
const radioValue = ref('option1')
const isModalOpen = ref(false)
const activeTab = ref('tab1')
const currentPage = ref(1)
const showToast = ref(true)
const searchValue = ref('')
const dropdownItems = [
  { label: 'Profile', value: 'profile' },
  { label: 'Settings', value: 'settings' },
  { label: 'Logout', value: 'logout' },
]

const tableCols = [
  { key: 'id', label: 'ID', width: '80px' },
  { key: 'name', label: 'Name' },
  { key: 'status', label: 'Status', align: 'center' as const },
  { key: 'price', label: 'Price', align: 'right' as const },
]

const tableData = [
  { id: '#001', name: 'Neo-Brutalism Poster', status: 'success', price: '$24.00' },
  { id: '#002', name: 'Vintage Jacket', status: 'warning', price: '$89.00' },
  { id: '#003', name: 'Retro Sneakers', status: 'danger', price: '$120.00' },
]
</script>

<template>
  <div class="space-y-12 max-w-5xl mx-auto pb-20">
    <div>
      <h1 class="text-4xl font-black uppercase tracking-tight mb-2">UI Component Demo</h1>
      <p class="text-lg">Preview of Neo-Brutalism base components.</p>
    </div>

    <!-- Buttons -->
    <section>
      <h2 class="text-2xl font-black border-b-3 border-black pb-2 mb-6">Buttons</h2>
      <div class="flex flex-wrap gap-4 items-center">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
      <div class="flex flex-wrap gap-4 items-center mt-6">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button disabled>Disabled</Button>
      </div>
    </section>

    <!-- Badges -->
    <section>
      <h2 class="text-2xl font-black border-b-3 border-black pb-2 mb-6">Badges</h2>
      <div class="flex flex-wrap gap-4">
        <Badge variant="primary">Primary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="danger">Danger</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="neutral">Neutral</Badge>
      </div>
    </section>

    <!-- Forms -->
    <section>
      <h2 class="text-2xl font-black border-b-3 border-black pb-2 mb-6">Forms</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="space-y-4">
          <Input v-model="textValue" label="Default Input" placeholder="Type something..." />
          <Input modelValue="Error State" label="Input with Error" error="This field is required." />
          <Input modelValue="Disabled" label="Disabled Input" disabled />
          <Textarea label="Textarea" placeholder="Write your message here..." />
        </div>
        <div class="space-y-4">
          <Select 
            v-model="selectValue" 
            label="Select Dropdown" 
            :options="[{label: 'Option 1', value: '1'}, {label: 'Option 2', value: '2'}]" 
          />
          <div class="pt-2 space-y-4">
            <Checkbox v-model="checkboxValue" label="I agree to the terms and conditions" />
            
            <div class="flex flex-col gap-2 pt-2">
              <span class="font-bold text-sm">Radio Group</span>
              <Radio v-model="radioValue" value="option1" name="demo-radio" label="Option 1" />
              <Radio v-model="radioValue" value="option2" name="demo-radio" label="Option 2" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cards & Modals -->
    <section>
      <h2 class="text-2xl font-black border-b-3 border-black pb-2 mb-6">Cards & Modals</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card title="Simple Card">
          <p>This is a standard card component with a thick border and offset shadow. Typical for neo-brutalism design.</p>
          <template #footer>
            <div class="flex justify-end gap-2">
              <Button variant="ghost" size="sm">Cancel</Button>
              <Button variant="primary" size="sm">Submit</Button>
            </div>
          </template>
        </Card>
        
        <Card title="Interactive Elements">
          <p class="mb-4">Click the button below to open a modal dialog.</p>
          <Button @click="isModalOpen = true" block>Open Modal</Button>
        </Card>
      </div>
    </section>

    <!-- Table -->
    <section>
      <h2 class="text-2xl font-black border-b-3 border-black pb-2 mb-6">Table</h2>
      <Table :columns="tableCols" :data="tableData" striped>
        <template #cell-status="{ value }">
          <Badge :variant="value">{{ value }}</Badge>
        </template>
      </Table>
    </section>

    <!-- Other Components -->
    <section>
      <h2 class="text-2xl font-black border-b-3 border-black pb-2 mb-6">More Components</h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        <!-- Tabs & Avatar -->
        <div class="space-y-8">
          <Card title="Tabs Component">
            <Tabs 
              v-model="activeTab" 
              :tabs="[{label: 'Overview', value: 'tab1'}, {label: 'Settings', value: 'tab2'}, {label: 'Logs', value: 'tab3'}]"
            >
              <template #tab1>
                <div class="p-4 bg-muted border-3 border-black rounded-sm">Content for Overview tab.</div>
              </template>
              <template #tab2>
                <div class="p-4 bg-muted border-3 border-black rounded-sm">Content for Settings tab.</div>
              </template>
              <template #tab3>
                <div class="p-4 bg-muted border-3 border-black rounded-sm">Content for Logs tab.</div>
              </template>
            </Tabs>
          </Card>
          
          <Card title="Avatars & Dropdown">
            <div class="flex items-center gap-6 mb-6">
              <Avatar size="sm" />
              <Avatar size="md" />
              <Avatar size="lg" shape="circle" />
            </div>
            <div class="w-48">
              <Dropdown label="User Menu" :items="dropdownItems" @select="console.log" />
            </div>
          </Card>
        </div>

        <!-- Spinners, Pagination, FilterBar -->
        <div class="space-y-8">
          <Card title="Data Tools">
            <div class="mb-6">
              <FilterBar 
                v-model:searchValue="searchValue" 
                searchPlaceholder="Search products..." 
                @filter="console.log('Filter clicked')"
              />
            </div>
            <div class="mb-6 flex justify-center">
              <Pagination v-model:currentPage="currentPage" :totalPages="5" />
            </div>
            <div class="flex items-center justify-around bg-muted p-4 border-3 border-black rounded-sm">
              <LoadingSpinner size="sm" />
              <LoadingSpinner size="md" text="Loading..." />
              <LoadingSpinner size="lg" />
            </div>
          </Card>
        </div>
      </div>
    </section>

    <!-- Toasts & Empty State -->
    <section>
      <h2 class="text-2xl font-black border-b-3 border-black pb-2 mb-6">States & Notifications</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <EmptyState 
          title="No Products Found" 
          description="Try adjusting your search filters to find what you're looking for."
        >
          <template #action>
            <Button variant="primary">Clear Filters</Button>
          </template>
        </EmptyState>
        
        <div class="space-y-4">
          <Toast type="info" title="Information" message="This is an informational toast message." />
          <Toast type="success" title="Success" message="Your data has been saved." />
          <Toast type="warning" title="Warning" message="Please check your inputs." />
          <Toast type="error" title="Error" message="Failed to delete the item." />
        </div>
      </div>
    </section>

    <!-- Modal Component -->
    <Modal v-model="isModalOpen" title="Important Notice">
      <p class="mb-4">This is a modal dialog. It uses a backdrop blur and thick borders to stand out.</p>
      <p>You can place any content inside this modal, including forms or confirmation messages.</p>
      <template #footer>
        <div class="flex justify-end gap-2">
          <Button variant="ghost" @click="isModalOpen = false">Close</Button>
          <Button variant="primary" @click="isModalOpen = false">Confirm</Button>
        </div>
      </template>
    </Modal>
  </div>
</template>
