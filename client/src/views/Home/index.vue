<template>
  <div class="home">
    <div class="categories" v-for="(payload, i) in data" :key="i">
      <div class="header"><h2>{{payload[0]}}</h2></div>
      <div class="body">
        <sui-card-group :items-per-row="1" v-for="( todo, j) in payload[1]" :key="j" >
          <Card :todo="todo" :index="j" :category="payload[0]" />
        </sui-card-group>
      </div>
    </div>
    <loading v-if="loading" />
    <Create />
    <Edit />
    <Destroy />
  </div>
</template>

<script>
import Card from './components/Card.vue'
import Loading from '@/components/Loading.vue'
import Create from '@/components/CreateModal.vue'
import Edit from '@/components/EditModal.vue'
import Destroy from '@/components/DeleteModal.vue'

export default {
  name: 'Home',
  data () {
    return {
      categories: [
        'Backlog',
        'Todo',
        'Done',
        'Completed'
      ]
    }
  },
  created () {
    this.$store.dispatch('fetchPost')
  },
  computed: {
    data () {
      return [
        ['Backlog', this.$store.state.post.backlog],
        ['Todo', this.$store.state.post.todo],
        ['Done', this.$store.state.post.done],
        ['Completed', this.$store.state.post.completed]
      ]
    },
    loading () {
      return this.$store.state.post.loading
    }
  },
  components: {
    Card,
    Loading,
    Create,
    Edit,
    Destroy
  }
}
</script>
