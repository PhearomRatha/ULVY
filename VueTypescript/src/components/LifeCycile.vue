
<template>
  <h1>Hello</h1>
</template>
<script setup lang="ts">
import { ref, watch, watchEffect, onMounted, onBeforeMount, computed } from 'vue'

const user = ref < string > ('')
const user1 = ref < string > ('')
const user2 = ref < string > ('')
watch(user, () => {
  // use for all users
})

// use for specific user
watchEffect(() => {})
// mounted
onMounted(() => {
  console.log('user.value')
})
// onBeforMount = create
onBeforeMount(() => {
  console.log('create')
})
// compute
const user3 = computed(() => {
  return user1.value + user2.value
})
</script>