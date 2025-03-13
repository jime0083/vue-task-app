<template>
    <div>
      <input v-model="newTask" placeholder="新しいタスクを入力" />
      <button @click="addNewTask">追加</button>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        newTask: ''
      };
    },
    methods: {
      ...mapActions(['addTask']),
      addNewTask() {
        if (this.newTask.trim()) {
          this.addTask(this.newTask);
          this.newTask = '';
        }
      }
    }
  };
  </script>