<script setup lang="ts">
import { onMounted } from 'vue';
import Chart from '../components/Harness/Chart.vue'
import Filter1 from '../components/Harness/Filter1.vue'

import { useDataStore } from '@/stores/chartdata';
const dataStore = useDataStore()

onMounted(() => {
  dataStore.fetch()
})

</script>

<template>
  <main>
    <Filter1 />
    <Chart />
  </main>
</template>
