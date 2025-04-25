<script>
export default{
    data(){
        return{
            count:0,
            isLoggedIn:false,
            msg:"welcome back",
            msg1:"please Login",
            
        }
    },
    methods:{
        increseClick(){
            this.count++

        },
        descreseClick(){
            this.count--

        },
        isToggleLoggedIn(){
            this.isLoggedIn = !this.isLoggedIn
            

        }

    }
}
</script>
<template>
    <div>
      {{ count }}
 
    <button @click="increseClick">
        increse
    </button>
    <button @click="descreseClick">
        descrese
    </button>
    </div>
    <button @click="isToggleLoggedIn">click</button>
    <div v-if="isLoggedIn">
      {{ msg }}
    </div>
    <div v-else>
        {{ msg1 }}
    </div>

    
  
    


</template>