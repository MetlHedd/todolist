<template>
  <div class="section">
    <div class="columns">
      <div class="column is-one-quarter">
        <SiteLeftMenu />
      </div>
      <div class="column box">
        <div class="content">
          <div class="control">
            <p class="heading">
              <b-icon icon="format-title" size="is-small"></b-icon>
              <span>
                Title:
              </span>
            </p>
            <b-field label="Add a title to this task">
              <b-input v-model="item.title" type="text" icon="pencil" placeholder="Insert the item title"></b-input>
            </b-field>
            <hr>
          </div>
          <div class="control">
            <p class="heading">
              <b-icon icon="checkbox-multiple-marked" size="is-small"></b-icon>
              <span>
                Checked as done:
              </span>
            </p>
            <b-switch v-model="item.done">Status</b-switch>
            <hr>
          </div>
          <div class="control">
            <p class="heading">
              <b-icon icon="folder" size="is-small"></b-icon>
              <span>
                Projects:
              </span>
            </p>
            <b-field label="Add some projects">
              <b-taginput v-model="item.projects" ellipsis icon="folder-plus" type="is-info" placeholder="Add new projects..."></b-taginput>
            </b-field>
            <hr>
          </div>
          <div class="control">
            <p class="heading">
              <b-icon icon="tag" size="is-small"></b-icon>
              <span>
                Tags:
              </span>
            </p>
            <b-field label="Add some tags">
              <b-taginput v-model="item.tags" ellipsis icon="tag-plus" type="is-info" placeholder="Add new tags..."></b-taginput>
            </b-field>
            <hr>
          </div>
          <div class="control">
            <p class="heading">
              <b-icon icon="text-box-multiple" size="is-small"></b-icon>
              <span>
                Content:
              </span>
            </p>
          </div>
        </div>
        <vue-freemde v-model="item.content" ref="Markdown" :configs="freeMDEConfigs"></vue-freemde>
        <div class="buttons">
          <b-button type="is-success" icon-right="playlist-plus" @click="sendForms(item)">
            <span v-if="$route.params.id">
              Save changes
            </span>
            <span v-else>
              Create a new item
            </span>
          </b-button>
          <b-button type="is-danger" icon-right="delete" tag="router-link" to="/">
            Cancel
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * Modules import
 */
import VueFreemde from 'vue-freemde'

/**
 * Local file import
 */
import SiteLeftMenu from '@/components/site/LeftMenu.vue'

export default {
  name: 'TasksNewItem',
  data () {
    return {
      item: {
        title: 'Item Title',
        content: '',
        tags: ['New Tag'],
        projects: ['New Project']
      },
      freeMDEConfigs: {
        autofocus: false,
        spellChecker: false
      },
      formsOptions: {
        canSendForms: false,
        newItem: true
      }
    }
  },
  created: function () {
    this.$pouchStorage.getDBItem(this.$pouch, 'tasks', this.$route.params.id).then((item) => {
      if (item) {
        this.formsOptions.canSendForms = true
        this.formsOptions.newItem = false
        this.item = item
      } else {
        this.formsOptions.canSendForms = true
      }
    })
  },
  components: {
    SiteLeftMenu,
    VueFreemde
  },
  methods: {
    sendForms: function (itemData) {
      if (this.formsOptions.canSendForms) {
        if (this.formsOptions.newItem) {
          this.$router.push('/tasks/see/' + this.$pouchStorage.addTask(this.$pouch, itemData))
        } else {
          this.$pouchStorage.addTask(this.$pouch, itemData)
          this.$router.push('/tasks/see/' + this.$route.params.id)
        }
      }
    }
  }
}
</script>
