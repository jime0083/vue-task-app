<template>
    <div>
      <h2>タスクを追加</h2>
      <input v-model="newTask" placeholder="新しいタスクを入力" />
      <button @click="addTask">追加</button>
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
      addTask() {
        if (this.newTask.trim()) {
          this.addTask({ title: this.newTask });
          this.newTask = '';
        }
      }
    }
  };
  </script>