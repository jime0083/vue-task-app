<template>
    <div>
      <h2>タスク一覧</h2>
      <ul>
        <li v-for="task in tasks" :key="task.id">{{ task.title }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TaskList',
    props: {
      tasks: Array
    }
  };
  </script>