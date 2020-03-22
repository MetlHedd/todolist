<template>
  <div class="section">
    <div class="columns">
      <div class="column is-one-quarter">
        <SiteLeftMenu />
      </div>
      <div class="column box">
        <h1 class="title">Project Items</h1>
        <h2 class="subtitle">You are seeing 20 items per page</h2>
        <hr>
        <ul class="block-list is-normal is-outlined has-radius">
          <li v-for="(item, key) in items" v-bind:key="key">
            <nav class="level">
              <div class="level-left">
                <div class="level-item block">
                  <b-icon icon="folder"></b-icon>
                  <a :href="'/projects/see/' + item._id">
                    {{item.name}}
                  </a>
                </div>
              </div>
              <div class="levem-item">
                <div>
                  <b-field grouped group-multiline>
                    <div class="control">
                      <b-taglist attached>
                        <b-tag size="is-small" type="is-dark">
                          <b-icon icon="information" size="is-small"></b-icon>
                        </b-tag>
                        <b-tag size="is-small" type="is-warning">
                          Number of items with this project: {{item.itemsWith.length}}
                        </b-tag>
                      </b-taglist>
                    </div>
                  </b-field>
                </div>
              </div>
              <div class="level-right">
                <div class="level-item">
                  <div class="buttons">
                    <b-button type="is-link" icon-right="pencil" @click="editProject(item)"></b-button>
                    <b-button type="is-danger" icon-right="delete" @click="deleteProject(item)"></b-button>
                  </div>
                </div>
              </div>
            </nav>
          </li>
        </ul>
        <hr>
        <b-pagination :total="pages.numberOfItems" :per-page="pages.itemsPerPage" order="is-centered" :current.sync="pages.currentPage" @change="pageChanged" range-before="3" range-after="1" aria-next-label="Next page" aria-previous-label="Previous page" aria-page-label="Page" aria-current-label="Current page"></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import SiteLeftMenu from '@/components/site/LeftMenu.vue'

export default {
  name: 'ProjectItems',
  data () {
    return {
      firstKey: null,
      lastKey: null,
      pages: {
        scheme: {
          saveID: true,
          query: {
            selector: {
              _id: { $gte: null }
            },
            sort: ['_id'],
            limit: 20
          }
        },
        currentPage: 1,
        itemsPerPage: 20,
        numberOfItems: 1
      },
      items: []
    }
  },
  components: {
    SiteLeftMenu
  },
  created: function () {
    /**
     * Event: request new items from database and set the numbers of pages
     */
    this.$on('requestForItems', () => {
      this.pages.scheme.query.selector._id = { $gte: null }
      this.$pouchStorage.fetchItemsDB(this.$pouch, 'projects', this.pages.scheme).then((items) => {
        this.items = items

        if (items.length > 0) {
          this.lastKey = items[items.length - 1]._id
          this.firstKey = items[0]._id
        }
      })
    })

    this.$emit('requestForItems')
  },
  updated: function () {
    this.$emit('requestForItems')
  },
  methods: {
    nextPage: function () {
      this.pages.scheme.query.selector._id = { $gt: this.lastKey }
      this.$pouchStorage.fetchItemsDB(this.$pouch, 'projects', this.pages.scheme).then((items) => {
        this.items = items

        if (items.length > 0) {
          this.lastKey = items[items.length - 1]._id
          this.firstKey = items[0]._id
        }
      })
    },
    backPage: function () {
      this.pages.scheme.query.selector._id = { $lt: this.firstKey }
      this.$pouchStorage.fetchItemsDB(this.$pouch, 'projects', this.pages.scheme).then((items) => {
        this.items = items

        if (items.length > 0) {
          this.lastKey = items[items.length - 1]._id
          this.firstKey = items[0]._id
        }
      })
    },
    pageChanged: function (page) {
      if (page > this.pages.currentPage) {
        this.nextPage()
      } else {
        this.backPage()
      }
    },
    editProject: function (item) {
      this.$buefy.dialog.prompt({
        message: 'Edit the project name',
        inputAttrs: {
          placeholder: 'e.g. Project A',
          value: item.name
        },
        trapFocus: true,
        onConfirm: (value) => {
          this.$pouchStorage.editTPFromTasks(this.$pouch, 'projects', item._id, value)
        }
      })
    },
    deleteProject: function (item) {
      this.$buefy.dialog.confirm({
        title: 'Deleting Project',
        message: 'Are you sure you want to <b>delete</b> this project? This action cannot be undone.',
        confirmText: 'Delete Project',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => {
          this.$pouchStorage.deleteTPFromTasks(this.$pouch, 'projects', item._id)
          this.$buefy.toast.open({
            duration: 3000,
            message: 'Done',
            type: 'is-success'
          })
        }
      })
    }
  }
}
</script>
