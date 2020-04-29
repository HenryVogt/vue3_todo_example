<template>
  <ul>
    <li v-for="todo in todos" :key="todo.id">
      <ToDo
        :id="todo.id"
        :value="todo.value"
        :done="todo.done"
        @done="onDone"
        @delete="onDelete"
      />
    </li>
  </ul>
</template>

<script>
import ToDo from '@/components/ToDo.vue'
export default {
  name: 'ToDoList',
  components: { ToDo },
  props: {
    todos: { type: Array, required: true }
  },
  methods: {
    onDone (id) {
      this.$emit('done', id)
    },
    onDelete (id) {
      this.$emit('delete', id)
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
