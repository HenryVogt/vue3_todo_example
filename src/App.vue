<template>
  <div>
    <h1>ToDo's</h1>
    <NewToDo @new="onNew"/>
    <div class="open">
      <h2>Open</h2>
      <ToDoList v-if="openTodos.length > 0" :todos="openTodos" @done="onDone" @delete="onDelete" />
      <p v-else>you have no open ToDo's! 👍</p>
    </div>
    <div class="done">
      <h2>Done</h2>
      <ToDoList v-if="doneTodos.length > 0" :todos="doneTodos" />
      <p v-else>why are there no finished ToDo's?</p>
    </div>
  </div>
</template>

<script>
import ToDoList from '@/components/ToDoList.vue'
import NewToDo from '@/components/NewToDo.vue'

let idCounter = 1

export default {
  name: 'App',
  data: function () {
    return {
      todos: [
        { id: idCounter++, value: 'Feed the trolls: "Vue > React"', done: false },
        { id: idCounter++, value: 'Lay down and cry 😭', done: false },
        { id: idCounter++, value: 'Party hard all night long', done: false }
      ]
    }
  },
  components: { ToDoList, NewToDo },
  computed: {
    openTodos () {
      const open = this.todos.filter(item => (item.done === false))
      return [...open.sort((a, b) => { return a.id < b.id })]
    },
    doneTodos () {
      const done = this.todos.filter(item => (item.done === true))
      return [...done.sort((a, b) => { return a.id > b.id })]
    }
  },
  methods: {
    onNew (newToDo) {
      this.todos.push({
        id: idCounter++,
        value: newToDo,
        done: false
      })
    },
    onDone (id) {
      this.todos.find(todo => todo.id === id).done = true
    },
    onDelete (id) {
      this.todos = this.todos.filter(todo => todo.id !== id)
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
