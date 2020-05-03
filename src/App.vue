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
import { useTodoState } from '@/composables/todo'
import ToDoList from '@/components/ToDoList.vue'
import NewToDo from '@/components/NewToDo.vue'

export default {
  name: 'App',
  components: { ToDoList, NewToDo },
  setup (context) {
    const { openTodos, doneTodos, setNew, setDone, setDelete } = useTodoState(context)
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
