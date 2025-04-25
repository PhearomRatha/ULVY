<!-- <template>
  <NavBar/>
  <main>
    <RouterView/>


  </main>

</template>

<script>
import NavBar from './components/NavBar.vue';


export default{
  components:{
    NavBar
  }
}

</script> -->

<template>
  <Counter/>
  <Items/>
  <FechApi/>
</template>
<script>


import Counter from './components/Counter.vue';
import Items from './components/Items.vue';
import FechApi from './components/FechApi.vue';
export default {
  components:{
    Counter,
    Items,
    FechApi,

  }
  
}
</script>
<style>

</style>
