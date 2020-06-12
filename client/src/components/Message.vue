<template>
  <transition name="fade">
    <sui-message
      v-if="open"
      header="message.title"
      content="message.message"
      dismissable
      @dismiss="handleDismiss"
      id="message"
      style=":color:color"
    />
  </transition>
</template>

<script>
export default {
  name: 'Message',
  data () {
    return {
      open: false
    }
  }
}
</script>
