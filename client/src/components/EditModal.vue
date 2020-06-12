<template>
  <sui-modal v-model="open">
    <sui-modal-header>Edit Kanban</sui-modal-header>
    <sui-modal-content>
      <sui-form @submit.prevent="submit">
        <sui-form-field>
          <label>Title</label>
          <input placeholder="Title" v-model="title" />
        </sui-form-field>
        <sui-form-field>
          <label>Description</label>
          <textarea v-model="body"></textarea>
        </sui-form-field>
        <sui-button-group class="btn-group">
          <sui-button color="red" inverted @click.prevent="cancel">Cancel</sui-button>
          <sui-button type="submit" color="green" inverted>Submit</sui-button>
        </sui-button-group>
      </sui-form>
    </sui-modal-content>
  </sui-modal>
</template>

<script>
export default {
  name: 'modalEdit',
  data () {
    return {
      title: '',
      body: ''
    }
  },
  computed: {
    open () {
      if (this.$store.state.modal.dataEdit) {
        this.title = this.$store.state.modal.dataEdit.todo.title
        this.body = this.$store.state.modal.dataEdit.todo.body
      }
      return this.$store.state.modal.openEdit
    }
  },
  methods: {
    cancel () {
      this.$store.commit('SET_EDIT')
      this.$store.commit('SET_DATA_EDIT', null)
    },
    submit () {
      const payload = {
        title: this.title,
        body: this.body
      }
      const { category, index } = this.$store.state.modal.dataEdit
      if (category === 'Backlog') {
        const BACKLOG = [...this.$store.state.post.backlog]
        BACKLOG.splice(
          index,
          1,
          payload
        )
        this.$store.commit('SET_BACKLOG', BACKLOG)
      } else if (category === 'Todo') {
        const TODO = [...this.$store.state.post.todo]
        TODO.splice(
          index,
          1,
          payload
        )
        this.$store.commit('SET_TODO', TODO)
      } else if (category === 'Done') {
        const DONE = [...this.$store.state.post.done]
        DONE.splice(
          index,
          1,
          payload
        )
        this.$store.commit('SET_DONE', DONE)
      } else {
        const COMPLETED = [...this.$store.state.post.completed]
        COMPLETED.splice(
          index,
          1,
          payload
        )
        this.$store.commit('SET_COMPLETED', COMPLETED)
      }
      this.$store.commit('SET_EDIT')
      this.$store.commit('SET_DATA_EDIT', null)
      this.$vToastify.success('Success edit kanban')
    }
  }
}
</script>
