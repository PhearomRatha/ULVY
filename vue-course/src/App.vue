<script>

import CombindVifVshowVbind from './components/CombindVifVshowVbind.vue';
import CombiningvForandvModel from './components/Combiningv-forandv-model.vue';
import IncreaseAndDiscrese from './components/IncreaseAndDiscrese.vue';
import VShowEx2 from './components/v-showEx2.vue';
import Vbind from './components/Vbind.vue';
import Vfor from './components/Vfor.vue';
import Vmodel from './components/Vmodel.vue';
import VCloak from './components/VCloak.vue'
import Mounted from './components/Mounted.vue';





export default{
  components:{
    IncreaseAndDiscrese,
    VShowEx2,
    Vbind,
    CombindVifVshowVbind,
    Vfor,
    Vmodel,
    CombiningvForandvModel,
    VCloak,
    Mounted
    

  },
    data(){
        return{
           
        }
    },
    methods:{
     
    }
}
</script>
<template>
  <IncreaseAndDiscrese/>
  <VShowEx2/>
  <Vbind/>
  <CombindVifVshowVbind/>
  <Vfor/>
  <Vmodel/>
  <CombiningvForandvModel/>
  <VCloak/>
  <Mounted/>
 

</template>