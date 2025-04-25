<!-- <template>
    <div>
      <h2>Go to the Woo!</h2>
      <p>{{ fetchDataStore }}</p>
      <button @click="fetchData">Fetch Data</button>
    </div>
  </template>
  
  <script>
  import { useApiStore } from "../stores/fechApi"; 
  export default {
    data() {
      return {
        fetchDataFunc: useApiStore(), 
      };
    },
    methods: {
      fetchData() {
        this.fetchDataFunc.fetchData(); 
      },
    },
    computed: {
      fetchDataStore() {
        return this.fetchDataFunc.data; 
      },
    },
  };
  </script> -->
  <template>
    <div>
      <h2>Go to the Woo!</h2>
   
      <div v-if="fetchDataStore">
        <img :src="fetchDataStore" alt="Random Dog" style="max-width: 300px; border: 1px solid #ccc;" />
      </div>
     
      <div v-else>
        <p>No image loaded yet. Click "Fetch Data" to load an image.</p>
      </div>
      <button @click="fetchData">Fetch Data</button>
    </div>
  </template>
  
  <script>
  import { useApiStore } from "../stores/fechApi";
  
  export default {
    data() {
      return {
        fetchDataFunc: useApiStore(), 
      };
    },
    methods: {
      fetchData() {
        this.fetchDataFunc.fetchData(); 
      },
    },
    computed: {
      fetchDataStore() {
        return this.fetchDataFunc.data; 
      },
    },
  };
  </script>
