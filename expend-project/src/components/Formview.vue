<template>
  <div class="w-[80%] m-auto shadow-lg">
    <!-- SearchForm Component -->
    <SearchForm
      :searchByName="searchByName"
      :searchByPrice="searchByPrice"
      @update-search-name="updateSearchName"
      @update-search-price="updateSearchPrice"
      @toggle-expense-form="toggleExpenseForm"
      @toggle-category-form="toggleCategoryForm"
      :showCategoryForm="showCategoryForm"
      :categoryInputs="categoryInputs"
      @add-category="addCategory"
      @remove-category-input="removeCategoryInput"
      @add-more-category-input="addMoreCategoryInput"
      @cancel-category-form="toggleCategoryForm"
      :showExpenseForm="showExpenseForm"
      :categories="categories"
      @add-expense="addExpense"
    />

    <!-- Category Money Visualization -->
    <CategaryMoney :filteredExpenses="filteredExpenses" />

    <!-- Expense Table -->
    <ExpenseTable
      :expenses="filteredExpenses"
      @add-expense="addExpense"
      @remove-expense="removeExpense"
      @edit-expense="editExpense"
      :showExpenseForm="showExpenseForm"
      :expenseToEdit="expenseToEdit"
      @toggle-expense-form="toggleExpenseForm"
    />
  </div>
</template>

<script>
import SearchForm from '@/components/SearchsSection.vue';
import CategaryMoney from '@/components/CategaryMoney.vue';
import ExpenseTable from '@/components/ExpenseTable.vue';

export default {
  components: {
    SearchForm,
    CategaryMoney,
    ExpenseTable,
  },
  data() {
    return {
      searchByName: '',
      searchByPrice: '',
      showExpenseForm: false,
      expenses: [],
      showCategoryForm: false,
      categories: [],
      categoryInputs: [''],
      expenseToEdit: null,
    };
  },
  computed: {
    // Filtered expenses based on search criteria
    filteredExpenses() {
      return this.expenses.filter((expense) => {
        return (
          (this.searchByName ? expense.name.includes(this.searchByName) : true) &&
          (this.searchByPrice ? expense.price <= parseFloat(this.searchByPrice) : true)
        );
      });
    },
  },
  methods: {
    updateSearchName(name) {
      this.searchByName = name;
    },
    updateSearchPrice(price) {
      this.searchByPrice = price;
    },
    toggleExpenseForm() {
      this.showExpenseForm = !this.showExpenseForm;
    },
    addExpense(expense) {
      if (this.expenseToEdit) {
        const index = this.expenses.findIndex((e) => e.id === this.expenseToEdit.id);
        if (index !== -1) {
          this.expenses[index] = expense;
        }
      } else {
        const newExpense = { id: Date.now(), ...expense };
        this.expenses.push(newExpense);
      }
      this.clearExpenseForm();
    },
    removeExpense(index) {
      this.expenses.splice(index, 1);
    },
    editExpense(index) {
      this.expenseToEdit = { ...this.expenses[index] };
      this.showExpenseForm = true;
    },
    toggleCategoryForm() {
      this.showCategoryForm = !this.showCategoryForm;
      if (!this.showCategoryForm) this.categoryInputs = [''];
    },
    addCategory(newCategories) {
      newCategories.forEach((name) => {
        if (name.trim() !== '') {
          this.categories.push({ id: this.categories.length + 1, name });
        }
      });
      this.toggleCategoryForm();
    },
    addMoreCategoryInput() {
      this.categoryInputs.push('');
    },
    removeCategoryInput(index) {
      this.categoryInputs.splice(index, 1);
    },
    clearExpenseForm() {
      this.expenseToEdit = null;
      this.showExpenseForm = false;
    },
  },
};
</script>

<style scoped>
/* Add styles as needed */
</style>
