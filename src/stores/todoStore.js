import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    inputValue: "",
    tasks: [],
  }),
});
