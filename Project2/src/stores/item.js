import { defineStore } from "pinia";

export const useItemStore = defineStore("useItemStore", {
  state: () => ({
    items: [],


  }),
  actions: {
    addItems(item) {
      if (this.validation(item.name,item.price)) {

        this.items.push(item)
      }
    },
    deleteItem(id) {
      this.items.splice(id,1)
    
    
    },
    
    validation(name,price){
      return name.trim().length > 0 && price >0
    }
  },
});
