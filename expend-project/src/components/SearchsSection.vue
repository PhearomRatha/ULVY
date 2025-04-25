<template>
  <div class="flex gap-10 h-[3rem] m-auto rounded-md mt-10">
    <!-- Search inputs for name and price -->
    <input
      v-model="searchNameInput"
      @input="$emit('update-search-name', searchNameInput)"
      class="p-2 h-full w-[35%] border border-gray-300 rounded-md"
      placeholder="Search by Name"
    />
    <input
      type="number"
      placeholder="Search by Price"
      v-model="searchPriceInput"
      @input="$emit('update-search-price', searchPriceInput)"
      class="p-2 h-full w-[25%] border border-gray-300 rounded-md"
    />
    <div class="flex gap-2">
      <button
        @click="$emit('toggle-expense-form')"
        class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
      >
        Add Expense
      </button>
      <button
        @click="toggleCategoryForm"
        class="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
      >
        Add Category
      </button>
    </div>
  </div>

  <!-- Expense Form -->
  <form
    v-if="showExpenseForm"
    @submit.prevent="saveExpense"
    class="flex flex-col gap-4 bg-gray-100 p-6 rounded-md shadow-md w-[80%] relative"
  >                          <!-- First Row: Expense Name and Expense Price -->
    <div class="flex flex-wrap gap-4">
      <input
        v-model="expense.name"
        :class="{ invalid: !expense.name && isSubmitted }"
        placeholder="Expense Name"
        class="p-2 border border-gray-300 rounded-md flex-1 w-full md:w-1/2"
      />
      <input
        v-model="expense.price"
        type="number"
        :class="{ invalid: !expense.price && isSubmitted }"
        placeholder="Expense Price"
        class="p-2 border border-gray-300 rounded-md flex-1 w-full md:w-1/2"
      />
    </div>

    <!-- Second Row: Expense Category and Expense Date -->
    <div class="flex flex-wrap gap-4">
      <select
        v-model="expense.category"
        :class="{ invalid: !expense.category && isSubmitted }"
        class="p-2 border border-gray-300 rounded-md flex-1 w-full md:w-1/2"
      >
        <option disabled value="">Select Category</option>
        <option v-for="category in categories" :key="category.id" :value="category.name">
          {{ category.name }}
        </option>
      </select>
      <input
        v-model="expense.date"
        type="date"
        :class="{ invalid: !expense.date && isSubmitted }"
        class="p-2 border border-gray-300 rounded-md flex-1 w-full md:w-1/2"
      />
    </div>

    <!-- Buttons at the end -->
    <div class="flex justify-end gap-4 mt-4 w-full">
      <button
        type="submit"
        class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 text-sm"
      >
        Save 
      </button>
      <button
        type="button"
        @click="clearExpenseForm"
        class="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 text-sm"
      >
        Clear 
      </button>
      <button
        type="button"
        @click="cancelForm"
        class="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 text-sm"
      >
        Cancel
      </button>
    </div>
    <div v-if="expenseSaved" class="text-green-500 mt-2">
      <p>Expense added successfully!</p>
    </div>
  </form>

  <!-- Category Form -->
  <form
    v-if="showCategoryForm"
    @submit.prevent="addCategories"
    class="flex flex-col gap-4 bg-gray-100 p-6 rounded-md shadow-md w-[50%]"
  >
    <!-- New Categories -->
    <div
      v-for="(category, index) in newCategories"
      :key="index"
      class="flex gap-2 items-center"
    >
      <input
        v-model="category.name"
        :class="{ invalid: !category.name.trim() && isSubmitted }"
        placeholder="New Category Name"
        class="p-2 border border-gray-300 rounded-md flex-1"
      />
      <div @click="removeCategory(index)">
        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
          <path
            fill="#bc0505"
            d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z"
          />
        </svg>
      </div>
    </div>

    <button
      type="button"
      @click="addCategoryInput"
      class="bg-green-500 text-black py-2 px-4 rounded-md hover:bg-gray-400"
    >
      Add More Category
    </button>

    <div class="flex gap-5 justify-end">
      <button
        type="submit"
        class="bg-blue-500 w-[25%] py-2 text-white rounded-md hover:bg-green-600"
      >
        Add 
      </button>

      <button
        type="button"
        @click="cancelCategoryForm"
        class="bg-red-500 text-white py-2 w-[25%] rounded-md hover:bg-red-600"
      >
        Cancel
      </button>
    </div>
    <div v-if="categorySaved" class="text-green-500 mt-2">
      <p>Category added successfully!</p>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    searchByName: String,
    searchByPrice: String,
    showCategoryForm: Boolean,
    showExpenseForm: Boolean,
    expenses: Array,
  },
  emits: [
    "update-search-name",
    "update-search-price",
    "toggle-expense-form",
    "toggle-category-form",
    "add-category",
    "cancel-category-form",
    "add-expense",
  ],
  data() {
    return {
      categories: [
        { id: 1, name: "Food" },
        { id: 2, name: "Drink" },
        { id: 3, name: "House" },
        { id: 4, name: "Travel" },
      ],
      searchNameInput: this.searchByName,
      searchPriceInput: this.searchByPrice,
      expense: {
        name: "",
        price: "",
        category: "",
        date: "",
      },
      newCategories: [{ name: "" }],
      isSubmitted: false,
      expenseSaved: false,
      categorySaved: false,
      isNameValid: false,
      isPriceValid: false,
      isCategoryValid: false,
      isDateValid: false,
    };
  },
  methods: {
    saveExpense() {
      this.isSubmitted = true;
      this.validateExpenseForm();
      if (this.isNameValid && this.isPriceValid && this.isCategoryValid && this.isDateValid) {
        this.$emit("add-expense", { ...this.expense });
        this.expenseSaved = true;
        setTimeout(() => (this.expenseSaved = false), 2000);
        this.clearExpenseForm();
      }
    },
    clearExpenseForm() {
      this.expense = { name: "", price: "", category: "", date: "" };
      this.isSubmitted = false;
    },
    validateExpenseForm() {
      this.isNameValid = this.expense.name.trim().length > 0;
      this.isPriceValid = this.expense.price > 0 && !isNaN(this.expense.price);
      this.isCategoryValid = this.expense.category.trim().length > 0;
      this.isDateValid = this.expense.date.trim().length > 0;
    },
    cancelForm() {
      this.expenseSaved = false;
      this.isSubmitted = false;
      this.$emit("toggle-expense-form");
    },
    toggleCategoryForm() {
      this.$emit("toggle-category-form");
    },
    addCategories() {
      this.isSubmitted = true;
      const allValid = this.newCategories.every(
        (category) => category.name.trim().length > 0
      );
      if (allValid) {
        this.newCategories.forEach((category) => {
          const newCategoryObj = {
            id: this.categories.length + 1,
            name: category.name.trim(),
          };
          this.categories.push(newCategoryObj);
        });
        this.newCategories = [{ name: "" }];
        this.categorySaved = true;
        setTimeout(() => (this.categorySaved = false), 2000);
        this.isSubmitted = false;
      }
    },
    addCategoryInput() {
      this.newCategories.push({ name: "" });
    },
    removeCategory(index) {
      this.newCategories.splice(index, 1);
    },
    cancelCategoryForm() {
      this.newCategories = [{ name: "" }];
      this.isSubmitted = false;
      this.$emit("toggle-category-form");
    },
  },
};
</script>

<style scoped>
.invalid {
  border-color: red;
}
</style>
