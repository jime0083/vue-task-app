import { createStore } from 'vuex';
import { createStore } from 'vue';
import { db } from '../firebase';
import { collection, onSnapshot } from 'firebase/firestore';

export default {
  state: {
    tasks: [],
    error: null,
    loading: false
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    setError(state, error) {
      state.error = error;
    },
    setLoading(state, loading) {
      state.loading = loading;
    }
  },
  actions: {
    async fetchTasks({ commit }) {
      commit('setLoading', true);
      try {
        const tasksCollection = collection(db, 'tasks');
        onSnapshot(tasksCollection, (snapshot) => {
          const tasks = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          commit('setTasks', tasks);
          commit('setLoading', false);
        });
      } catch (error) {
        commit('setError', error.message);
        commit('setLoading', false);
      }
    }
  }
};