<script>
export default{
    data(){
        return{
            message:"",
            users:"https://jsonplaceholder.typicode.com/users"
        }

    },
    methods:{
        fetchData(){
            this.message="datafeched successfully"
            this.users="user sucessfully"
        }
    },
    mounted(){
        this.fetchData();
    }
    
}
</script>
<template>
    <p>{{ message }}</p>
  <ul v-for="user in users" :key="user">
    <li>{{ user.id }},{{ use.name }}</li>
  </ul>

</template>