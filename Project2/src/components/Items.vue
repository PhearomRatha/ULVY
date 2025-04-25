<template>
  <form>
    <input type="text" v-model="name" placeholder="Enter item name" />
    <input type="number" v-model="price" placeholder="Enter price" />
    <button type="button" @click="addNewItem">Add</button>

    <div v-for="item in allItems" :key="item.id">
      <p>{{ item.id }} {{ item.name }}, {{ item.price }}</p>
      <button type="button" @click="removeItem(item.id)">Remove</button>
    </div>
  </form>
</template>

<script>
import { useItemStore } from '../stores/item'

export default {
  data() {
    return {
      items: useItemStore(),
      item: {},
      name: '',
      price: 0,
      id: '',
      idShow: 0,
    }
  },
  methods: {
    addNewItem() {
      const currentItem = {
        id: this.generateId(),
        name: this.name,
        price: this.price,
      };
      this.items.addItems(currentItem)
      console.log(currentItem)
    },

    removeItem(id) {
      const index = this.items.items.findIndex((item) => item.id === id)
      console.log(index);
      
      this.items.deleteItem(index)
    },
    generateId() {
      return `${Date.now()}-${Math.floor(Math.random() * 10000)}`
    },
  },
  computed: {
    allItems() {
      return this.items.items
    },
  },
}
</script>

<style></style>
