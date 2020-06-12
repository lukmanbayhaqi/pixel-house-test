<template>
  <sui-modal v-model="open">
    <sui-modal-header>Create Kanban</sui-modal-header>
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
  name: 'ModalCreate',
  data () {
    return {
      title: '',
      body: ''
    }
  },
  computed: {
    open () {
      return this.$store.state.modal.openCreate
    }
  },
  methods: {
    cancel () {
      this.$store.commit('SET_CREATE')
    },
    submit () {
      const BACKLOG = [...this.$store.state.post.backlog]
      const payload = {
        title: this.title,
        body: this.body
      }
      this.$store.commit('SET_BACKLOG', [payload, ...BACKLOG])
      this.$store.commit('SET_CREATE')
      this.$vToastify.success('Success create kanban')
      this.title = ''
      this.body = ''
    }
  }
}
</script>
