<script setup lang="ts">

import { useDataStore } from '@/stores/chartdata';
const dataStore = useDataStore()

</script>
<template>

  <div>Chart: {{ dataStore.filteredData }}</div>

</template>