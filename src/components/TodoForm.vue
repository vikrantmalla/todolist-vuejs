<template>
  <form @submit.prevent="addTask">
    <div className="flex flex-row justify-center items-start gap-4">
      <div>
        <input
          className="p-2 w-[100%] border"
          type="text"
          placeholder="Enter a new task..."
          v-model="inputValue"
        />
      </div>
      <button className="py-2 px-4 border" @click="addTask">+</button>
    </div>
  </form>
  {{ todoStore.tasks }}
  <TodoList :tasks="tasks" />
</template>

<script setup>
import { ref } from "vue";
import TodoList from "./TodoList.vue";
import { useTodoStore } from "../stores/todoStore";
const todoStore = useTodoStore();
const inputValue = ref("");

const tasks = () => todoStore.inputValue;
const addTask = () => {
  todoStore.inputValue = inputValue.value;
  // Add the inputValue to the tasks array in the store
  todoStore.tasks.push(inputValue.value);
  // You can also reset the input field
  inputValue.value = "";
};
</script>





