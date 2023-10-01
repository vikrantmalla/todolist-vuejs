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
  <TodoList :tasks="tasks" />
</template>

<script setup>
import TodoList from "./TodoList.vue";
import { ref } from 'vue';

const newTask = ref('');
const tasks = ref([]);

const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value);
    newTask.value = '';
  }
};
</script>





