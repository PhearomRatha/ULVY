import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter',{
  state:()=>({
    count:0,
    items:[],
    taskname: '',
  }),
  actions:{
    increment(){
      this.count++
    },
    descrement(){
      this.count--
    },    
  }
})