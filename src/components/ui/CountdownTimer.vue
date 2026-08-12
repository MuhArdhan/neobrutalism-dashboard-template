<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import dayjs from 'dayjs'

const props = defineProps({
  targetDate: {
    type: String,
    required: true
  },
  label: {
    type: String,
    default: 'Ends in'
  }
})

const emit = defineEmits(['expire'])

const timeLeft = ref({
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0
})
const isExpired = ref(false)

let timer: number

const updateTimer = () => {
  const now = dayjs()
  const target = dayjs(props.targetDate)
  const diff = target.diff(now, 'second')
  
  if (diff <= 0) {
    isExpired.value = true
    timeLeft.value = { days: 0, hours: 0, minutes: 0, seconds: 0 }
    clearInterval(timer)
    emit('expire')
    return
  }
  
  timeLeft.value = {
    days: Math.floor(diff / (3600 * 24)),
    hours: Math.floor((diff % (3600 * 24)) / 3600),
    minutes: Math.floor((diff % 3600) / 60),
    seconds: Math.floor(diff % 60)
  }
}

onMounted(() => {
  updateTimer()
  if (!isExpired.value) {
    timer = window.setInterval(updateTimer, 1000)
  }
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})

const pad = (num: number) => num.toString().padStart(2, '0')
</script>

<template>
  <div class="inline-flex items-center gap-2 bg-black text-white px-3 py-1.5 rounded-sm font-bold shadow-neo-sm">
    <span class="text-xs uppercase tracking-wider text-gray-300 mr-1">{{ label }}</span>
    <template v-if="!isExpired">
      <div v-if="timeLeft.days > 0">
        <span>{{ timeLeft.days }}d</span>
      </div>
      <div>
        <span>{{ pad(timeLeft.hours) }}</span>
        <span class="opacity-50 mx-0.5">:</span>
        <span>{{ pad(timeLeft.minutes) }}</span>
        <span class="opacity-50 mx-0.5">:</span>
        <span class="text-yellow-300">{{ pad(timeLeft.seconds) }}</span>
      </div>
    </template>
    <span v-else class="text-red-400">Ended</span>
  </div>
</template>
