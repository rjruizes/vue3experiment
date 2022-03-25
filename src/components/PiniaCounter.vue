<script setup lang="ts">

import { useCounterStore } from '@/stores/counter';
const counterStore = useCounterStore()

</script>
<template>

  <button @click="counterStore.add">You clicked ME {{ counterStore.counter }} times.</button>

</template>