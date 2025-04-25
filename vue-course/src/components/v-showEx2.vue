<script>
export default{
    data(){
        return{
            List:[ 'Apple','Banana','Cake' ],
            isVishible:false
        }
    },
    methods:{
        istoggleVishible(){
            this.isVishible = !this.isVishible
        }

    }

}
</script>
<template>
    <Button @click="istoggleVishible" >Click me </Button>
 <div v-show="isVishible">
    <ul>
       <li v-for="item in List" :key="item">{{ item }}</li>
    </ul>
 </div>



</template>