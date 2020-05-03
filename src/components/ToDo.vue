<template>
  <div class="todo" :class="{done: done}">
    <p>{{ value }}</p>
    <div v-if="!done" class="buttons">
      <button @click="onDone(id)" >Done</button>
      <button @click="onDelete(id)" >Delete</button>
    </div>
  </div>
</template>

<script>
import { useTodoEvents } from '@/composables/todo'
export default {
  name: 'ToDo',
  props: {
    id: { type: Number, required: true },
    value: { type: String, required: true },
    done: { type: Boolean, required: true }
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
.todo
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

  p
    padding-top: 4px
    margin: 0 24px 0 0
    word-break: break-all
    align-self: center

    @include tabletBreakpoint
      word-break: keep-all

  .buttons
    button
      align-self: flex-start

      &:not(:first-of-type)
        margin-left: 6px

  &.done
    opacity: 0.3
</style>
