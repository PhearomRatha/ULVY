<template>
  <div class="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
    <!-- Header -->
    <h1 class="text-3xl font-extrabold text-blue-900 mb-6 text-center">
      Form Builder
    </h1>

    <!-- Questions List -->
    <div
      v-for="(question, index) in questions"
      :key="index"
      class="mb-6 bg-gray-50 p-4 rounded-lg shadow-sm border"
    >
      <!-- Question Input -->
      <div class="mb-4">
        <input
          type="text"
          v-model="question.text"
          placeholder="Untitled question"
          class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <!-- Multiple Choice Options -->
      <div v-if="question.type === 'multiple-choice'">
        <!-- Select between Checkbox or Radio -->
        <div class="mb-4">
          <label class="font-semibold text-gray-700 mr-4">Choice Type:</label>
          <select
            v-model="question.choiceType"
            class="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="checkbox">Checkbox</option>
            <option value="radio">Radio</option>
          </select>
        </div>

        <!-- Display Options -->
        <div
          v-for="(option, optIndex) in question.options"
          :key="optIndex"
          class="flex items-center mb-2"
        >
          <input
            :type="question.choiceType"
            :name="'question-' + index"
            disabled
            class="mr-2"
          />
          <input
            type="text"
            v-model="question.options[optIndex]"
            placeholder="Option"
            class="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <button
            @click="removeOption(index, optIndex)"
            class="ml-2 px-2 py-1 bg-red-100 text-red-600 rounded-md hover:bg-red-200"
          >
            Remove
          </button>
        </div>
        <button
          @click="addOption(index)"
          class="mt-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200"
        >
          + Add Option
        </button>
      </div>

      <!-- Remove Question Button -->
      <button
        @click="removeQuestion(index)"
        class="mt-4 text-sm text-red-600 hover:text-red-800"
      >
        Remove Question
      </button>
    </div>

    <!-- Add Question Button -->
    <button
      @click="addQuestion"
      class="w-full py-3 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-200"
    >
      + Add Question
    </button>

    <!-- Submit Button -->
    <div class="mt-8">
      <button
        @click="submitForm"
        class="w-full py-3 bg-green-500 text-white font-bold rounded-md hover:bg-green-600 transition duration-200"
      >
        Submit Form
      </button>
    </div>

    <!-- Display Submitted Data -->
    <div
      v-if="submittedData"
      class="mt-8 bg-gray-100 p-4 rounded-lg shadow-inner"
    >
      <h2 class="text-xl font-bold text-gray-700 mb-4">Submitted Data</h2>
      <pre
        class="bg-white p-4 rounded-md border border-gray-200 overflow-auto"
        >{{ submittedData }}</pre
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          text: "Untitled question",
          type: "multiple-choice",
          choiceType: "checkbox", // Default to checkbox
          options: ["Option 1"],
        },
      ],
      submittedData: null,
    };
  },
  methods: {
    addQuestion() {
      this.questions.push({
        text: "Untitled question",
        type: "multiple-choice",
        choiceType: "checkbox",
        options: ["Option 1"],
      });
    },
    removeQuestion(index) {
      this.questions.splice(index, 1);
    },
    addOption(questionIndex) {
      this.questions[questionIndex].options.push("");
    },
    removeOption(questionIndex, optionIndex) {
      this.questions[questionIndex].options.splice(optionIndex, 1);
    },
    submitForm() {
      // Convert form data to JSON
      this.submittedData = JSON.stringify(this.questions, null, 2);

      // Save to localStorage
      localStorage.setItem("formData", JSON.stringify(this.questions));
    //   alert("Form data saved to localStorage!");
    },
  },
};
</script>

<style>
body {
  font-family: "Inter", sans-serif;
  background-color: #f9fafb;
}
</style>
