<script>
export default{
    data(){
     return{
        username:'',



        }
    }
}
</script>
<template>
    <input type="text" placeholder="Enter your user name " v-model="username">
    <p>{{ username }}</p>

</template>