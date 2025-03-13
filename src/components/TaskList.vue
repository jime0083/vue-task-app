<template>
  <div>
    <h2>タスク一覧</h2>
    <p v-if="loading">読み込み中...</p>
    <p v-if="error" class="error">エラー: {{ error }}</p>
    <ul v-if="!loading && !error">
      <li v-for="task in tasks" :key="task.id">
        {{ task.title }}
        <button @click="deleteTask(task.id)">削除</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['tasks', 'error', 'loading'])
  },
  methods: {
    ...mapActions(['deleteTask'])
  }
};
</script>

<style>
.error {
  color: red;
  font-weight: bold;
}
</style>