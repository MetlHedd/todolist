<template>
  <div class="section">
    <div class="columns">
      <div class="column is-one-quarter">
        <SiteLeftMenu />
      </div>
      <div class="column box">
        <div class="content">
          <p class="title is-4">
            <b-icon icon="text-short"></b-icon>
            <span>{{item.title}}</span>
          </p>
          <p class="heading">on {{item.projects.join(", ")}}.</p>
          <hr>
        </div>
        <div class="buttons">
          <b-button type="is-success" icon-right="check-circle" @click="invertDoneTask(item)">
            Check as
            <span v-if="item.done"> done</span>
            <span v-else> un-done</span>
          </b-button>
          <b-button type="is-link" icon-right="pencil" tag="router-link" :to="'/tasks/edit/' + $route.params.id">
            Edit
          </b-button>
          <b-button type="is-warning" icon-right="archive" @click="invertArchiveTask(item)">
            <span v-if="!item.archived">Archive</span>
            <span v-else>Un-archive</span>
          </b-button>
          <b-button type="is-danger" icon-right="delete" @click="deleteTask(item)">
            Delete
          </b-button>
        </div>
        <div class="content">
          <div class="control">
            <p class="heading">
              <b-icon icon="tag" size="is-small"></b-icon>
              <span>
                Tags:
              </span>
            </p>
            <b-field grouped group-multiline>
              <div class="control">
                <b-taglist attached>
                  <b-tag type="is-dark">
                    <b-icon icon="calendar" size="is-small"></b-icon>
                  </b-tag>
                  <b-tag type="is-warning">
                    19/03/2020 - 18:57
                  </b-tag>
                </b-taglist>
              </div>
              <div class="control" v-for="tag in item.tags" v-bind:key="tag">
                <b-taglist attached>
                  <b-tag type="is-dark">
                    <b-icon icon="tag" size="is-small"></b-icon>
                  </b-tag>
                  <b-tag type="is-info">
                    {{tag}}
                  </b-tag>
                </b-taglist>
              </div>
            </b-field>
            <hr>
          </div>
        </div>
        <div class="control">
          <p class="heading">
            <b-icon icon="text-box-multiple" size="is-small"></b-icon>
            <span>
              Content:
            </span>
          </p>
          <p class="content">
            <markduck :markdown="item.content"/>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * Modules import
 */
import markduck from 'markduckjs'

/**
 * Local file import
 */
import SiteLeftMenu from '@/components/site/LeftMenu.vue'

export default {
  name: 'TasksSeeItem',
  data () {
    return {
      item: {
        content: '',
        projects: [],
        tags: [],
        title: '',
        done: false,
        archived: false
      }
    }
  },
  components: {
    SiteLeftMenu,
    markduck: markduck({

    })
  },
  created: function () {
    this.$pouchStorage.getDBItem(this.$pouch, 'tasks', this.$route.params.id).then((item) => {
      if (item) {
        this.item = item

        /**
         * Check if projects or tags has 0 elements
         */
        if (this.item.projects.length === 0) {
          this.item.projects = ['No projects found']
        }
        if (this.item.tags.length === 0) {
          this.item.tags = ['No tags found']
        }
      } else {
        this.$router.push('/')
      }
    })
  }
}
</script>
