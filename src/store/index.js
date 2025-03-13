import { createStore } from 'vuex';
import { db } from '../firebase';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';

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
    async fetchTasks({ commit }) {
      const querySnapshot = await getDocs(collection(db, 'tasks'));
      const tasks = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      commit('setTasks', tasks);
    },
    async addTask({ commit }, taskTitle) {
      const docRef = await addDoc(collection(db, 'tasks'), { title: taskTitle, completed: false });
      commit('addTask', { id: docRef.id, title: taskTitle, completed: false });
    },
    async removeTask({ commit }, taskId) {
      await deleteDoc(doc(db, 'tasks', taskId));
      commit('removeTask', taskId);
    }
  }
});