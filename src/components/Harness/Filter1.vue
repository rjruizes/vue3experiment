<script setup lang="ts">

import { useDataStore } from '@/stores/chartdata';
const dataStore = useDataStore()

</script>
<template>

  Filter: 
  <button @click="dataStore.setFilter1">setFilter1('Jane')</button>

</template>