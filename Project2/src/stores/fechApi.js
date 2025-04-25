// import { defineStore } from "pinia";
// import axios from "axios";

// export const useApiStore = defineStore("useApiStore", {
//   state: () => ({
//     data: [],
//   }),
//   actions: {
//     async fetchData() {
//       try {
//         const res = await axios.get("https://dog.ceo/api/breeds/image/random");
//         this.data = res.data;
//       } catch (err) {
//         console.error("Error fetching data:", err);
//       } finally {
//         console.log("Fetch attempt finished.");
//       }
//     },
//   },
// });

import { defineStore } from 'pinia'
import axios from 'axios'

export const useApiStore = defineStore('useApiStore', {
  state: () => ({
    data: '',
    actions: {
      async fetchData() {
        try {
          const res = await axios.get('https://dog.ceo/api/breeds/image/random')
          this.data = res.data.message
        } catch (err) {
          console.error('Error fetching data:', err)
        } finally {
          console.log('Fetch attempt finished.')
        }
      },
    },
  }),
})
