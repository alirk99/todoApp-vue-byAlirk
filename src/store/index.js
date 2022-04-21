import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    todosPending: 0,
    todosDisplay: "all"
  },
  getters: {
    getTodos: function (state) {
      console.log("getTodos fired in sevices");
      return state.todos;
    },
    getPending: function (state) {
      console.log("getPending fired in sevices");
      return state.todosPending;
    },
    getTodosDisplay: function (state) {
      console.log("getTodosDisplay fired in sevices");
      return state.todosDisplay;
    },
  },
  mutations: {
    addTodo: function (state, data) {
      console.log("addTodos fired in sevices");
      state.todos.unshift(data);
    },
    editTodo: function (state, data) {
      console.log("editTodo fired in sevices");
      console.log(data.old, data.new)
      
      state.todos = state.todos.map((element) => {
        return (element.title === data.old.title) ? data.new : element
      })

      console.log(state.todos);
    },
    removeTodo: function (state, data) {
      console.log("removeTodo fired in sevices");
      state.todos = state.todos.filter((element) => element.title !== data.title);
    },
    removeCompleted: function (state) {
      console.log("removeCompleted fired in sevices");
      state.todos = state.todos.filter((element) => element.status === false);
    },
    setTodos: function (state, data) {
      console.log("setTodos fired in sevices");
      state.todos = data;
    },
    setTodosDisplay: function (state, data) {
      console.log("setTodosDisplay fired in sevices");
      state.todosDisplay = data;
    },
    findPending: function (state) {
      console.log("findPending fired in sevices");
      state.todosPending = 0;
      state.todos.forEach((element) => {
        if(!element.status) {state.todosPending ++};
      });
    },
  },
  actions: {
    fetchTodos: async function (state) {
      try {
        // const res = await fetch();
        // let data =await res.jason();
        let data = [
          {
            id: 1,
            title: "Exercise",
            status: true,
          },
          {
            id: 2,
            title: "Shopping", 
            status: false,
          },
          {
            id: 3,
            title: "Team Meeting", 
            status: false,
          },
          {
            id: 4,
            title: "Call a friend",
            status: false,
          },
        ];
        console.log("fetchTodos fired in sevices");
        setTimeout(() => {
          state.commit("setTodos", data);
          state.commit("findPending");
        }, 2500);
      } catch (error) {
        console.log(error);
      }
    },
    createTodo: async function (state, newData) {
      try {
        console.log("createTodo fired in sevices");
        setTimeout(() => {
          state.commit("addTodo", newData);
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    },
    updateTodo: async function (state, data) {
      try {
        console.log("updateTodo fired in sevices");
        console.log(data.old, data.new);
        setTimeout(() => {
          state.commit("editTodo", data);
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    },
    deleteTodo: async function (state, data) {
      try {
        console.log("deleteTodo fired in sevices");
        setTimeout(() => {
          state.commit("removeTodo", data);
        }, 2000);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {
  }
})
