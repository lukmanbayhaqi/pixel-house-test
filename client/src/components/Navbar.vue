<template>
  <sui-menu :widths="3" secondary pointing>
    <sui-menu-item class="create-navbar">
      <sui-button
      content="Create"
      icon="pencil"
      color="green"
      label-position="right"
      @click="create"
      class="button-create-navbar"
    />
    </sui-menu-item>
    <sui-menu-item><h3>Kanban</h3></sui-menu-item>
    <sui-menu-item></sui-menu-item>
  </sui-menu>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    create () {
      this.$store.commit('SET_CREATE')
    }
  }
}
</script>
