<template>
<nav>
    <ul>
        <li @click="navigationToOtherPage('')">Home</li>
        <li @click="navigationToOtherPage('about')">about</li>
        <li @click="navigationToOtherPage('protected')">Protected</li>
        <li @click="navigationToOtherPage('login')">login</li>
</ul>
</nav>

</template>
<script>


export default{
    components:{
     


    },
    date (){
        return{

        }
    },
    methods:{
        navigationToOtherPage(routerName){
      this.$router.push(`/${routerName}`)
    },
    }
}
</script>
<style>
ul{
    display: flex;
    gap: 0px 100px;
    font-weight: bold;
}
li{
    cursor: pointer;
}
</style>