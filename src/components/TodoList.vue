<script setup>
import { ref, defineProps } from "vue";
const { tasks } = defineProps({
  tasks: Array,
});
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
      </li>
    </ul>
  </div>
</template>