<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <ToDo
        :id="todo.id"
        :value="todo.value"
        :done="todo.done"
        @done="onDone(todo.id)"
        @delete="onDelete(todo.id)"
      />
    </li>
  </ul>
</template>

<script>
import ToDo from '@/components/ToDo.vue'
import { useTodoEvents } from '@/composables/todo'
export default {
  name: 'ToDoList',
  components: { ToDo },
  props: {
    todos: { type: Array, required: true }
  },
  setup (props, context) {
    const { onDone, onDelete } = useTodoEvents(context)
    return {
      onDone,
      onDelete
    }
  }
}
</script>

<style lang="sass" scoped>
ul
  list-style: none

  li
    margin-bottom: 12px
</style>
