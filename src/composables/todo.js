import { reactive, ref, computed } from 'vue'
export function useTodoState () {
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

export function useTodoEvents (context) {
  function onDone (id) {
    context.emit('done', id)
  }

  function onDelete (id) {
    context.emit('delete', id)
  }

  return {
    onDone,
    onDelete
  }
}
