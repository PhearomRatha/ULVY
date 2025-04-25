<template>
  <div v-if="!isFecthData">Geting Data from API</div>
  <div v-else>
    <div v-for="user in users" :key = "user.id" >
     <strong>id:</strong> {{ user.id }}<br>
     <strong>Userid:</strong> {{ user.userId }}<br>
     <strong> Title: </strong>{{ user.title }}<br>
      <strong>Body:</strong> {{ user.body }}
    </div>

  </div>
 
 

  </template>
 
  <script>
   import axios from 'axios'



  export default {
    data() {
      return {
           isFecthData:false,
           users:[]
     }
    
    },
    methods: {
      async fetchData(){
           // get put post delete
        await axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            console.log(res.data);  
           this.users  = res.data;
           this.isFecthData  = true;

           
        }).catch((err) =>{
            console.log(err);
            this.isFecthData = true;
            
        } )
      }

    },
    async created(){
      await  this.fetchData()
        console.log("Hi bru");
        
    },
    // mounted(){
    //     this.fetchData()
    //     console.log("Hi b");
        
    // }
  }
  </script>
  