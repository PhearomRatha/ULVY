<template>
    <div>
      <h1>Count:{{ count }}</h1><br><br>
      <button @click="increment">increment</button>
      <button @click="descrement">desrement</button>
    </div>
  </template>
  <script>
  import {useCounterStore} from '../stores/counter'
  export default {
    data() {
      return {
        counterStore: useCounterStore(),
      }
    },
    computed: {
      count() {
        return this.counterStore.count
      },
    },
    methods: {
      increment() {
        this.counterStore.increment()
      },
      descrement() {
        this.counterStore.descrement()
      },
      
    },
  }
  </script>
  <style>
  div{
    gap: 10px;
    display: flex;
  }
  button {
    border-radius: 15px;
    background: blue;
    padding: 10px;
    width: 100px;
    height: 50px;
    color: white;
   
  }
  </style>
  