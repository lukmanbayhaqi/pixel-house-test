<template>
  <sui-card>
    <sui-card-content>
      <sui-card-header>{{todo.title}}</sui-card-header>
      <sui-card-description
        >{{todo.body}}</sui-card-description
      >
    </sui-card-content>
    <sui-card-content extra>
      <sui-button-group>
        <sui-button style="background: none;" v-if="category !== 'Backlog'" @click="move('left')">
          <sui-button-content>
            <sui-icon color="green" name="angle double left" />
          </sui-button-content>
        </sui-button>
        <sui-button animated="vertical" style="background: none;" @click="edit">
          <sui-button-content visible>
            <sui-icon color="blue" name="edit" />
          </sui-button-content>
          <sui-button-content style="color: #2185d0!important;" hidden>Edit</sui-button-content>
        </sui-button>
        <sui-button animated="vertical" style="background: none;" @click="destroy">
          <sui-button-content visible>
            <sui-icon color="red" name="trash alternate" />
          </sui-button-content>
          <sui-button-content style="color: red;" hidden>Delete</sui-button-content>
        </sui-button>
        <sui-button style="background: none;" v-if="category !== 'Completed'" @click="move('right')">
          <sui-button-content>
            <sui-icon color="green" name="angle double right" />
          </sui-button-content>
        </sui-button>
      </sui-button-group>
    </sui-card-content>
  </sui-card>
</template>

<script>
export default {
  name: 'Card',
  props: {
    todo: Object,
    category: String,
    index: Number
  },
  methods: {
    move (direction) {
      if (this.category === 'Backlog') {
        const BACKLOG = [...this.$store.state.post.backlog]
        BACKLOG.splice(this.index, 1)
        this.$store.commit('SET_BACKLOG', BACKLOG)
        const TODO = [...this.$store.state.post.todo]
        this.$store.commit('SET_TODO', [this.todo, ...TODO])
      } else if (this.category === 'Todo') {
        const TODO = [...this.$store.state.post.todo]
        TODO.splice(this.index, 1)
        this.$store.commit('SET_TODO', TODO)
        if (direction === 'right') {
          const DONE = [...this.$store.state.post.done]
          this.$store.commit('SET_DONE', [this.todo, ...DONE])
        } else {
          const BACKLOG = [...this.$store.state.post.backlog]
          this.$store.commit('SET_BACKLOG', [this.todo, ...BACKLOG])
        }
      } else if (this.category === 'Done') {
        const DONE = [...this.$store.state.post.done]
        DONE.splice(this.index, 1)
        this.$store.commit('SET_DONE', DONE)
        if (direction === 'right') {
          const COMPLETED = [...this.$store.state.post.completed]
          this.$store.commit('SET_COMPLETED', [this.todo, ...COMPLETED])
        } else {
          const TODO = [...this.$store.state.post.todo]
          this.$store.commit('SET_TODO', [this.todo, ...TODO])
        }
      } else if (this.category === 'Completed') {
        const COMPLETED = [...this.$store.state.post.completed]
        COMPLETED.splice(this.index, 1)
        this.$store.commit('SET_COMPLETED', COMPLETED)
        const DONE = [...this.$store.state.post.done]
        this.$store.commit('SET_DONE', [this.todo, ...DONE])
      }
    },
    edit () {
      const payload = {
        todo: this.todo,
        category: this.category,
        index: this.index
      }
      this.$store.commit('SET_EDIT')
      this.$store.commit('SET_DATA_EDIT', payload)
    },
    destroy () {
      const payload = {
        category: this.category,
        index: this.index
      }
      this.$store.commit('SET_DELETE')
      this.$store.commit('SET_DATA_DELETE', payload)
    }
  }
}
</script>
