<script setup lang="ts">
import { onMounted } from 'vue';
import Chart from '../components/Harness/Chart.vue'
import HarnessInput from '../components/Harness/Input.vue'

import { useDataStore } from '@/stores/chartdata';
const dataStore = useDataStore()

onMounted(() => {
  dataStore.fetch()
})

</script>

<template>
  <main>
    <HarnessInput filter="search" />
    <Chart />
  </main>
</template>
