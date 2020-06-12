<template>
  <div class="destroy">
    <sui-modal v-model="open">
      <sui-modal-header>Are you sure want to delete this kanban?</sui-modal-header>
      <sui-modal-content class="destroy-content" >
        This kanban will deleted permanently
      </sui-modal-content>
      <sui-modal-actions style="display: flex; justify-content: center;">
        <sui-button-group class="btn-group">
          <sui-button color="red" inverted @click.prevent="cancel" >Cancel</sui-button>
          <sui-button color="green" inverted @click="destroy" >Submit</sui-button>
        </sui-button-group>
      </sui-modal-actions>
    </sui-modal>
  </div>
</template>

<script>
export default {
  name: 'modalDelete',
  computed: {
    open () {
      return this.$store.state.modal.openDelete
    }
  },
  methods: {
    cancel () {
      this.$store.commit('SET_DELETE')
    },
    destroy () {
      const { category, index } = this.$store.state.modal.dataDelete
      if (category === 'Backlog') {
        const BACKLOG = [...this.$store.state.post.backlog]
        BACKLOG.splice(index, 1)
        this.$store.commit('SET_BACKLOG', BACKLOG)
      } else if (category === 'Todo') {
        const TODO = [...this.$store.state.post.todo]
        TODO.splice(index, 1)
        this.$store.commit('SET_TODO', TODO)
      } else if (category === 'On Progress') {
        const ONPROGRESS = [...this.$store.state.post.onProgress]
        ONPROGRESS.splice(index, 1)
        this.$store.commit('SET_ONPROGRESS', ONPROGRESS)
      } else {
        const COMPLETED = [...this.$store.state.post.completed]
        COMPLETED.splice(index, 1)
        this.$store.commit('SET_COMPLETED', COMPLETED)
      }
      this.$store.commit('SET_DELETE')
      this.$store.commit('SET_DATA_DELETE', null)
      this.$vToastify.success('Success delete kanban')
    }
  }
}
</script>
