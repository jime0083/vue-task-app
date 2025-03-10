<template>
  <div id="app">
    <nav>
      <router-link to="/">ホーム</router-link>
      <router-link to="/tasks">タスク一覧</router-link>
    </nav>
    <router-view />
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
nav {
  display: flex;
  gap: 10px;
}
</style>