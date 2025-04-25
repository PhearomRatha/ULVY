<template>
    <h1>DefineEmit</h1>
    <button @click="UpdateValue">Update</button>

</template>
<script setup lang="ts">
const emits = defineEmits<{
    (event:'update',value:number):void
    (event:'create'):void

}>();
function UpdateValue(){
    emits('update',1);
}

// ? is optional
const props = withDefaults(
  defineProps<{
    value?:number
  }>(),
  {
    value:0
  }
);



</script>
