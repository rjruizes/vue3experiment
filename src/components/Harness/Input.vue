<script setup lang="ts">
import { useInputStore } from './inputStore'

const props = defineProps<{
  filter: string
}>()

const store = useInputStore(props.filter)()

</script>
<template>

  Filter: 
  <button @click="store.setVal('Jane')">setFilter('Jane')</button>

</template>