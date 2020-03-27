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
        <div class="control">
          <p class="heading">
              <b-icon icon="file" size="is-small"></b-icon>
              <span>
                File Control:
              </span>
            </p>
            <div class="buttons">
              <b-upload v-model="databaseImport" @input="importDB">
                 <a class="button is-primary">
                    <b-icon icon="upload"></b-icon>
                    <span>Click to upload</span>
                </a>
              </b-upload>
              <b-button type="is-info" icon-right="file-download"  tag="a" :href="databaseExport.href" :download="databaseExport.download">File Export</b-button>
            </div>
        </div>
        <hr>
        <div class="control">
          <p class="heading">
              <b-icon icon="format-title" size="is-small"></b-icon>
              <span>
                Database:
              </span>
            </p>
            <div class="buttons">
              <b-button type="is-danger" icon-right="delete" @click="clearDB">Clear db</b-button>
            </div>
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
      },
      databaseExport: {
        href: false,
        download: false
      },
      databaseImport: null
    }
  },
  components: {
    SiteLeftMenu
  },
  created: function () {
    this.exportDB()
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
    },
    exportDB: async function () {
      const jsonDBData = {
        tasks: [],
        tags: [],
        projects: []
      }

      await this.$pouch.find({ selector: { _id: { $gte: null } }, sort: ['_id'] }, 'tasks').then(async (tasksDocs) => {
        if (tasksDocs.docs) {
          jsonDBData.tasks = tasksDocs.docs

          await this.$pouch.find({ selector: { _id: { $gte: null } }, sort: ['_id'] }, 'tags').then(async (tagsDocs) => {
            if (tagsDocs.docs) {
              jsonDBData.tags = tagsDocs.docs

              await this.$pouch.find({ selector: { _id: { $gte: null } }, sort: ['_id'] }, 'projects').then((projectsDocs) => {
                if (projectsDocs.docs) {
                  jsonDBData.projects = projectsDocs.docs

                  const blob = new Blob([JSON.stringify(jsonDBData)], { type: 'application/json' })

                  this.databaseExport.href = URL.createObjectURL(blob)
                  this.databaseExport.download = 'todolistDB.json'
                }
              })
            }
          })
        }
      }).catch((error) => {
        console.error('Error on `exportDB`, details:', error.status, '-', error.message)
      })
    },
    importDB: async function (file) {
      const blobURL = URL.createObjectURL(file)
      const blob = await fetch(blobURL).then(r => r.json())

      if (blob.tasks) {
        console.log('t1')
        this.$pouch.bulkDocs(blob.tasks, { new_edits: false }, 'tasks').catch((error) => {
          console.error('Error on `importDB`, details:', error.status, '-', error.message)
        }).then(() => console.info('true'))
      }
      if (blob.tags) {
        this.$pouch.bulkDocs(blob.tags, { new_edits: false }, 'tags').catch((error) => {
          console.error('Error on `importDB`, details:', error.status, '-', error.message)
        })
      }
      if (blob.projects) {
        this.$pouch.bulkDocs(blob.projects, { new_edits: false }, 'projects').catch((error) => {
          console.error('Error on `importDB`, details:', error.status, '-', error.message)
        })
      }
    }
  }
}
</script>
