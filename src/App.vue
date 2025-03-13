<template>
  <div class="container">
    <h1>タスク管理アプリ</h1>
    <TaskForm />
    <TaskList />
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions(['fetchTasks'])
  },
  created() {
    this.fetchTasks();
  }
};
</script>

<style>
.container {
  width: 80%;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}
input {
  padding: 8px;
  margin-right: 10px;
}
button {
  padding: 8px;
  background-color: #28a745;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #218838;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  padding: 8px;
  margin: 5px 0;
  background: #f8f9fa;
  display: flex;
  justify-content: space-between;
}
</style>