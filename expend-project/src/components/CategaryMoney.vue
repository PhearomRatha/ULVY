<template>
  <div class="p-4 w-[80%] mt-[50px] rounded-lg mb-6 absolute">
    <div class="flex gap-4">
      <!-- Monthly Income -->
      <div class="flex flex-col py-4 w-3/6 text-center bg-blue-800 rounded-2xl justify-between">
        <h1 class="font-semibold text-3xl">${{ monthlyIncome }}</h1>
        <p>Monthly Income</p>
      </div>

      <!-- Monthly Expense -->
      <div class="flex flex-col py-4 w-3/6 text-center bg-red-500 rounded-2xl justify-between">
        <h3 class="font-semibold text-3xl">${{ monthlyExpanse }}</h3>
        <p>Monthly Expense</p>
      </div>

      <!-- Monthly Balance -->
      <div class="flex flex-col py-4 w-3/6 text-center bg-green-800 rounded-2xl justify-between">
        <h3 class="font-semibold text-3xl">${{ computedBalance }}</h3>
        <p>Monthly Balance</p>
      </div>

      <!-- Monthly Saving -->
      <div class="flex flex-col py-4 w-3/6 text-center bg-green-500 rounded-2xl justify-between">
        <h3 class="font-semibold text-3xl">${{ monthlySaving }}</h3>
        <p>Monthly Saving</p>
      </div>

      <!-- Monthly Transition -->
      <div class="flex flex-col py-4 w-3/6 text-center bg-red-700 rounded-2xl justify-between">
        <h3 class="font-semibold text-3xl">{{ monthlyTransition }}</h3>
        <p>Monthly Transition</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      monthlyIncome: 130,
      monthlySaving: 10,
      monthlyTransition: 0, // Initialize transition count
    };
  },
  props: {
    filteredExpenses: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    // Compute the total expenses from the filtered expenses
    monthlyExpanse() {
      return this.filteredExpenses.reduce((total, expense) => total + expense.price, 0);
    },

    // Compute the monthly balance (Income - Expense)
    computedBalance() {
      return this.monthlyIncome - this.monthlyExpanse;
    },

    // Count the number of expenses (transactions)
    monthlyTransition() {
      // The transition count is simply the length of filteredExpenses array
      return this.filteredExpenses.length;
    }
  },
};
</script>

<style scoped>
/* Add styles as needed */
</style>
