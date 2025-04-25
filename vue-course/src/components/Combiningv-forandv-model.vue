<script>
export default {
  data() {
    return {
      tasks: ['cook', 'boil', 'love'],
      taskList: [],
      isTaskInputVisible: false,
      isPriorityTaskVisible: false,
      inputNewTask: '',
      inputPriorityTask: '',
    };
  },
  methods: {
    toggleTaskInput() {
      this.isTaskInputVisible = !this.isTaskInputVisible;
    },
    togglePriorityTaskInput() {
      this.isPriorityTaskVisible = !this.isPriorityTaskVisible;
    },
    addTask() {
      if (this.inputNewTask.trim()) {
        this.tasks.push(this.inputNewTask.trim());
        this.inputNewTask = "";
        this.isTaskInputVisible = false;
      }
    },
    addPriorityTask() {
      if (this.inputPriorityTask.trim()) {
        this.taskList.push({ 
          name: this.inputPriorityTask.trim(), 
          priority: "Medium" 
        });
        this.inputPriorityTask = "";
        this.isPriorityTaskVisible = false;
      }
    },
  },
};
</script>

<template>
  <div>
    <h3>Tasks</h3>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task }}
      </li>
    </ul>
    <button @click="toggleTaskInput">Add New Task</button>
    <div v-if="isTaskInputVisible">
      <input
        type="text"
        v-model="inputNewTask"
        placeholder="Enter a new task"
      />
      <button @click="addTask">Save Task</button>
    </div>

    <h3>Task List with Priorities</h3>
    <ul>
      <li v-for="(task, index) in taskList" :key="index">
        <span>{{ task.name }}</span>
        <select v-model="task.priority">
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </li>
    </ul>
    <button @click="togglePriorityTaskInput">Add Task with Priority</button>
    <div v-if="isPriorityTaskVisible">
      <input
        type="text"
        v-model="inputPriorityTask"
        placeholder="Enter task name"
      />
      <button @click.prevent="addPriorityTask">Save Priority Task</button>
    </div>
  </div>
</template>
