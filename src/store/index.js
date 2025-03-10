import { createStore } from 'vuex';

export default createStore({
  state: {
    tasks: []
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    addTask(state, task) {
      state.tasks.push(task);
    },
    removeTask(state, taskId) {
      state.tasks = state.tasks.filter(task => task.id !== taskId);
    }
  },
  actions: {
    fetchTasks({ commit }) {
      // 後で Firebase Firestore から取得する処理を追加
      const tasks = [
        { id: 1, title: 'サンプルタスク', completed: false }
      ];
      commit('setTasks', tasks);
    },
    addTask({ commit }, task) {
      commit('addTask', task);
    },
    removeTask({ commit }, taskId) {
      commit('removeTask', taskId);
    }
  }
});