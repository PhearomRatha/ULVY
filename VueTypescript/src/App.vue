<!-- 
<template>
  <input type="text" v-model="inputValue" />
  <P>{{ inputValue }}</P>

</template>
<script setup lang="ts">
import { ref } from 'vue';


//inputValue
// console.log(inputValue.value);

// both are the same style we call array number
// const arr = reactive<number[]>([1,2,3,4])
//   const arr = reactive<Array<number>>([1,2,3,4])

interface User{
  id:string
  name:string
  age:number
}
const inputValue = ref<string>('');


</script> -->



<!-- <template>
  <input type="text" v-model="user.name" placeholder="Enter name" />
  <input type="text" v-model.number="user.age" placeholder="Enter age" />
  <button @click="addUser">Add User</button>
  

  <ul>
    <li v-for="user in users" :key="user.name">
      {{ user.name }} - {{ user.age }}
    </li>
  </ul>

</template>

<script setup lang="ts">
import { reactive } from 'vue'

interface User {
  name: string
  age: number
}
const user = reactive<User>({
  name:'',
  age:0
})

const users = reactive<Array<User>>([])

function addUser(){
  users.push({name:user.name,age:user.age})
}
</script> -->





<template>

</template>

<script setup lang="ts">


</script>














