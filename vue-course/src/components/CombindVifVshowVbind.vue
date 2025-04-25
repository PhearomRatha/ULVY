<script>
export default {
  data() {
    return {
      visibleEmail: false,
      userInput: '',
      Tasks: [
        { status: false, name: "Cook" },
        { status: false, name: "Drink" },
        { status: false, name: "Dance" }
      ],
      msg: "Task completed!"
    };
  },
  methods: {
    toggleVisible() {
      this.visibleEmail = !this.visibleEmail; 
    }
  }
};
</script>

<template>
  <div>
    <!-- Email Input Section -->
    <input 
      type="text" 
      placeholder="Please input your email" 
      v-model="userInput" 
    />
    <div>
      <input 
        type="checkbox" 
        @click="toggleVisible" 
      /> Show Email
    </div>
    <div>
      <p 
        v-if="userInput" 
        v-show="visibleEmail" 
        v-bind:style="{ color: visibleEmail ? 'green' : 'gray' }"
      >
        {{ userInput }}
      </p>
    </div>

    <div>
    <h3>Task Manager</h3>
    <ul>
      <!-- Loop through Tasks -->
      <li v-for="(task, index) in Tasks" :key="index">
        <!-- Checkbox to toggle task status -->
        <input 
          type="checkbox" 
          v-model="task.status" 
        />
        
        <!-- Task Name -->
        <span 
          v-bind:style="{ textDecoration: task.status ? 'line-through' : 'none', color: task.status ? 'green' : 'black' }"
        >
          {{ task.name }}
        </span>
        
        <!-- 'Task complete!' message -->
        <span 
          v-if="task.status" 
          v-bind:style="{ color: 'green', fontWeight: 'bold', marginLeft: '10px' }"
        >
          Task complete!
        </span>
      </li>
    </ul>
  </div>

    
  </div>
</template>
