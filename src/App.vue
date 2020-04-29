<template>
  <h1>ToDo's</h1>
  <NewToDo @new="onNew"/>
  <div class="open">
    <h2>Open</h2>
    <ToDoList v-if="state.openTodos.length > 0" :todos="state.openTodos" @done="onDone" @delete="onDelete" />
    <p v-else>you have no open ToDo's! 👍</p>
  </div>
  <div class="done">
    <h2>Done</h2>
    <ToDoList v-if="state.doneTodos.length > 0" :todos="state.doneTodos" />
    <p v-else>why are there no finished ToDo's?</p>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import ToDoList from '@/components/ToDoList.vue'
import NewToDo from '@/components/NewToDo.vue'

let idCounter = 1

export default {
  name: 'App',
  components: { ToDoList, NewToDo },
  setup () {
    const state = reactive({
      todos: [
        { id: idCounter++, value: 'Feed the trolls: "Vue > React"', done: false },
        { id: idCounter++, value: 'Lay down and cry 😭', done: false },
        { id: idCounter++, value: 'Party hard all night long', done: false }
      ],
      openTodos: computed(() => {
        const open = state.todos.filter(item => (item.done === false))
        return [...open.sort((a, b) => { return a.id < b.id })]
      }),
      doneTodos: computed(() => {
        const done = state.todos.filter(item => (item.done === true))
        return [...done.sort((a, b) => { return a.id > b.id })]
      })
    })

    function onNew (newToDo) {
      state.todos.push({ id: idCounter++, value: newToDo, done: false })
    }

    function onDone (id) {
      state.todos.find(todo => todo.id === id).done = true
    }

    function onDelete (id) {
      state.todos = state.todos.filter(todo => todo.id !== id)
    }

    return {
      state,
      onNew,
      onDone,
      onDelete
    }
  }
}
</script>

<style lang="sass">
h1
  text-align: center

.open > h2
  color: $primary

.done > h2
  color: $secondary
</style>
