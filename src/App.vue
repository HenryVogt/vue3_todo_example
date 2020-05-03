<template>
  <h1>ToDo's</h1>
  <NewToDo @new="setNew"/>
  <div class="open">
    <h2>{{ openTodos.length }} Open</h2>
    <ToDoList v-if="openTodos.length > 0" :todos="openTodos" @done="setDone" @delete="setDelete" />
    <p v-else>you have no open ToDo's! 👍</p>
  </div>
  <div class="done">
    <h2>{{ doneTodos.length }} Done</h2>
    <ToDoList v-if="doneTodos.length > 0" :todos="doneTodos" />
    <p v-else>why are there no finished ToDo's?</p>
  </div>
</template>

<script>
import { reactive, ref, computed } from 'vue'
import ToDoList from '@/components/ToDoList.vue'
import NewToDo from '@/components/NewToDo.vue'

export default {
  name: 'App',
  components: { ToDoList, NewToDo },
  setup () {
    const idCounter = ref(1)
    const state = reactive({
      todos: [
        { id: idCounter.value++, value: 'Feed the trolls: "Vue > React"', done: false },
        { id: idCounter.value++, value: 'Lay down and cry 😭', done: false },
        { id: idCounter.value++, value: 'Party hard all night long', done: false }
      ]
    })

    const openTodos = computed(() => {
      const open = state.todos.filter(item => (item.done === false))
      return [...open.sort((a, b) => { return a.id < b.id })]
    })

    const doneTodos = computed(() => {
      const done = state.todos.filter(item => (item.done === true))
      return [...done.sort((a, b) => { return a.id > b.id })]
    })

    function setNew (todoValue) {
      state.todos.push({ id: idCounter.value++, value: todoValue, done: false })
    }

    function setDone (id) {
      state.todos.find(todo => todo.id === id).done = true
    }

    function setDelete (id) {
      state.todos = state.todos.filter(todo => todo.id !== id)
    }

    return {
      openTodos,
      doneTodos,
      setNew,
      setDone,
      setDelete
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
