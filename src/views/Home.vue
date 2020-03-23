<template>
  <div class="section">
    <div class="columns">
      <div class="column is-one-quarter">
        <SiteLeftMenu />
      </div>
      <div class="column box">
        <b-notification type="is-warning" has-icon aria-close-label="Close notification" role="alert">
            This in an alpha version of <strong>m::TodoList</strong> if found any bug or want to request a new feature go to <a href="https://github.com/MetlHedd/todolist">https://github.com/MetlHedd/todolist</a>.
        </b-notification>
        <TodoListItemsList />
      </div>
    </div>
  </div>
</template>

<script>
import SiteLeftMenu from '@/components/site/LeftMenu.vue'
import TodoListItemsList from '@/components/todolist/ItemsList.vue'

export default {
  name: 'Home',
  data () {
    return {
      firstKey: null,
      lastKey: null,
      page: 1,
      pages: {
        scheme: {
          saveID: true,
          query: {
            selector: {
              _id: { $gte: null },
              done: { $eq: false },
              archived: { $eq: false }
            },
            sort: ['_id'],
            limit: 20
          }
        },
        currentPage: 1,
        itemsPerPage: 20,
        numberOfItems: 1
      }
    }
  },
  components: {
    SiteLeftMenu,
    TodoListItemsList
  },
  created: function () {
    /**
     * Event: request new items from database and set the numbers of pages
     */
    this.$on('requestForItems', (active, archived) => {
      this.pages.scheme.query.selector._id = { $gte: null }
      this.pages.scheme.query.selector.archived.$eq = archived

      if (archived) {
        this.$pouchStorage.fetchItemsDB(this.$pouch, 'tasks', {
          query: {
            selector: {
              done: !active
            },
            sort: ['_id']
          }
        }).then((docs) => {
          this.pages.numberOfItems = docs.length
        })
        this.pages.scheme.query.selector.done = { $gte: null }
      } else {
        this.$pouchStorage.fetchItemsDB(this.$pouch, 'tasks', {
          query: {
            selector: {
              archived: archived,
              done: !active
            },
            sort: ['_id']
          }
        }).then((docs) => {
          this.pages.numberOfItems = docs.length
        })
        this.pages.scheme.query.selector.done.$eq = !active
      }

      this.$pouchStorage.fetchItemsDB(this.$pouch, 'tasks', this.pages.scheme).then((docs) => {
        this.$emit('newItems', docs)
      })
    })

    this.$emit('requestForItems', this.$props.getActive, this.$props.getArchived)
  },
  update: function () {
    this.$emit('requestForItems', this.$props.getActive, this.$props.getArchived)
  },
  props: ['getArchived', 'getActive'],
  methods: {
    nextPage: function () {
      this.pages.scheme.query.selector._id = { $gt: this.lastKey }
      this.$pouchStorage.fetchItemsDB(this.$pouch, 'tasks', this.pages.scheme).then((docs) => {
        this.$emit('newItems', docs)
      })
    },
    backPage: function () {
      this.pages.scheme.query.selector._id = { $lt: this.firstKey }
      this.$pouchStorage.fetchItemsDB(this.$pouch, 'tasks', this.pages.scheme).then((docs) => {
        this.$emit('newItems', docs)
      })
    }
  }
}
</script>
