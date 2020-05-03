<template>
  <div class="newTodo">
    <input ref="inputRef" v-model="todo" @keypress.enter="onNew">
    <button @click.prevent="onNew">Add</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'NewToDo',
  setup (props, context) {
    const todo = ref('')
    const inputRef = ref()

    function onNew () {
      if (todo.value !== '') {
        context.emit('new', todo.value)
        todo.value = ''
        inputRef.value.focus()
      }
    }

    return {
      todo,
      inputRef,
      onNew
    }
  }
}
</script>

<style lang="sass" scoped>
.newTodo
  padding: 6px 12px
  border-left: $borderDefault
  border-bottom: $borderDefault
  border-bottom-left-radius: $borderRadius
  display: flex
  justify-content: space-between
  color: $textDark
  max-width: $mobileContainer - 24px

  @include tabletBreakpoint
    max-width: $tabletContainer - 24px

  @include desktopBreakpoint
    max-width: $desktopContainer - 24px

  input
    border: none
    background: none
    margin: 0 24px 0 0
    width: 100%

  button
    align-self: flex-start
</style>
