<template>
  <div class="newTodo">
    <input ref='newtodo' v-model="newToDo" @keypress.enter="onNew">
    <button @click.prevent="onNew">Add</button>
  </div>
</template>

<script>
export default {
  name: 'NewToDo',
  data: function () {
    return { newToDo: '' }
  },
  methods: {
    onNew () {
      if (this.newToDo !== '') {
        this.$emit('new', this.newToDo)
        this.newToDo = ''
        this.$refs.newtodo.focus()
      }
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
