<template>
    <div>
      <h2>タスク一覧</h2>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          {{ task.title }}
          <button @click="removeTask(task.id)">削除</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import { mapState,mapActions } from 'vuex';
  export default {
    computed:{
      ...mapState(['tasks'])
    },
    methods:{
      ...mapActions(['removeTask'])
    }
  };
  </script>