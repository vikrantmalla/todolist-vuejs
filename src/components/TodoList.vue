<script setup>
import { ref, defineProps } from "vue";
const { tasks } = defineProps({
  tasks: Array,
});
console.log("beforeUpdate", tasks);
const handleTaskRemoval = (taskId) => {
  const updatedTasks = tasks.filter((task) => task.id !== taskId);
  tasks = updatedTasks;
  console.log(updatedTasks);
  console.log("afterUpdate", tasks);
};
</script>

<template>
  <div className="w-[40%] m-auto">
    <ul className="list-none flex flex-col justify-between px-1 mt-3">
      <li
        className="flex justify-between items-center capitalize text-sm font-normal"
        v-for="(task, index) in tasks"
        :key="index"
      >
        {{ task }}
        <div className="flex gap-4">
          <button @click="handleEditTask(index)">Edit</button>
          <button @click="handleTaskRemoval(task.id)">Delete</button>
        </div>
      </li>
    </ul>
  </div>
</template>