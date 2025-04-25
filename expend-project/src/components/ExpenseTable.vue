<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-6">
    <!-- Table displaying added expenses -->
    <div class="mt-6 w-full max-w-4xl overflow-x-auto">
      <table class="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th class="p-2 text-left bg-gray-200">EXPENSE NAME</th>
            <th class="p-2 text-left bg-gray-200">AMOUNT</th>
            <th class="p-2 text-left bg-gray-200">CATEGORY</th>
            <th class="p-2 text-left bg-gray-200">DATE</th>
            <th class="p-2 text-left bg-gray-200">ACTION</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(expense, index) in expenses"
            :key="expense.id"
            class="border-b last:border-0"
          >
            <td class="p-2">{{ expense.name }}</td>
            <td class="p-2">${{ expense.price }}</td>
            <td class="p-2">{{ expense.category }}</td>
            <td class="p-2">{{ expense.date }}</td>
            <td class="p-2">
              <button
                @click="editExpense(index)"
                class="bg-yellow-500 text-white py-1 px-4 rounded hover:bg-yellow-600 mr-2"
              >
                Edit
              </button>
              <button
                @click="removeExpense(index)"
                class="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    expenses: Array,
    showExpenseForm: Boolean,
    expenseToEdit: Object,
  },
  methods: {
    addExpense(expense) {
      this.$emit('add-expense', expense);
    },
    removeExpense(index) {
      this.$emit('remove-expense', index);
    },
    editExpense(index) {
      this.$emit('edit-expense', index);
    },
  },
};
</script>

<style scoped>
/* Add additional styles as needed */
</style>
