<template>
  <form @submit.prevent="addTask">
    <div className="flex flex-row justify-center items-start gap-4">
      <div>
        <input
          v-model="newTask"
          className="p-2 w-[100%] border"
          type="text"
          placeholder="Enter a new task..."
        />
      </div>
      <button className="py-2 px-4 border" @click="addTask">+</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
      tasks: [],
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== "") {
        this.tasks.push(this.newTask); // Add the task to the tasks array
        this.newTask = ""; // Reset the input field
      }
    },
  },
};
</script>





