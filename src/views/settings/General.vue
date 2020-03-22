<template>
  <div class="section">
    <div class="columns">
      <div class="column is-one-quarter">
        <SiteLeftMenu />
      </div>
      <div class="column box">
        <h1 class="title">General Settings</h1>
        <h2 class="subtitle">Here you can set the settings of this app</h2>
        <hr>
        <div class="buttons">
          <b-button type="is-danger" icon-right="delete" @click="clearDB">Clear db</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SiteLeftMenu from '@/components/site/LeftMenu.vue'

export default {
  name: 'GeneralSettings',
  data () {
    return {
      options: {
        itemsPerPage: 20
      }
    }
  },
  components: {
    SiteLeftMenu
  },
  created: function () {
    // soon
  },
  methods: {
    clearDB: function () {
      this.$buefy.dialog.confirm({
        title: 'Deleting Database',
        message: 'Are you sure you want to <b>delete</b> the entiry db? This action cannot be undone.',
        confirmText: 'Delete Database',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => {
          this.$pouch.destroy('tasks').catch((error) => console.error('Error on `destroy->Task`, details:', error.status, '-', error.message))
          this.$pouch.destroy('projects').catch((error) => console.error('Error on `destroy->Projects`, details:', error.status, '-', error.message))
          this.$pouch.destroy('tags').catch((error) => console.error('Error on `destroy->Tags`, details:', error.status, '-', error.message))
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
