import { v4 as uuidv4, v5 as uuidv5 } from 'uuid'

const UUIDNamepace = '83d5d814-0fe5-4ea3-8e5a-7560cdfd1c71'

export default {
  install (Vue) {
    Vue.prototype.$pouchStorage = {}

    /**
     * Component methods
     */
    Vue.mixin({
      methods: {
        invertDoneTask: function (item) {
          this.$buefy.toast.open({
            duration: 3000,
            message: 'Done',
            type: 'is-success'
          })
          item.done = !item.done
          this.$pouchStorage.editDBItemAsObject(this.$pouch, 'tasks', item._id, { done: item.done })
        },
        invertArchiveTask: function (item) {
          this.$buefy.toast.open({
            duration: 3000,
            message: 'Done',
            type: 'is-success'
          })
          item.archived = !item.archived
          this.$pouchStorage.editDBItemAsObject(this.$pouch, 'tasks', item._id, { archived: item.archived })
        },
        deleteTask: function (item) {
          this.$buefy.dialog.confirm({
            title: 'Deleting Task',
            message: 'Are you sure you want to <b>delete</b> this task? This action cannot be undone.',
            confirmText: 'Delete Task',
            type: 'is-danger',
            hasIcon: true,
            onConfirm: () => {
              this.$pouchStorage.deleteTask(this.$pouch, item._id)
              this.$buefy.toast.open({
                duration: 3000,
                message: 'Done',
                type: 'is-success'
              })
            }
          })
        }
      }
    })

    /**
     * Tasks DB methods
     */
    Vue.prototype.$pouchStorage.addTask = function ($pouchSession, formsData) {
      let newUUID = uuidv4()

      if (formsData._id) {
        newUUID = formsData._id
      }

      $pouchSession.get(newUUID, {}, 'tasks').then(async (doc) => {
        for (const i in doc.tags) {
          if (formsData.tags.indexOf(doc.tags[i]) === -1) {
            await Vue.prototype.$pouchStorage.removeTaskFromAnything($pouchSession, 'tags', uuidv5(doc.tags[i], UUIDNamepace), formsData._id)
            doc.tags.splice(i, 1)
          }
        }

        for (const i in formsData.tags) {
          if (doc.tags.indexOf(formsData.tags[i]) === -1) {
            await Vue.prototype.$pouchStorage.addTP($pouchSession, 'tags', uuidv5(formsData.tags, UUIDNamepace), formsData._id)
          }
        }

        for (const i in doc.projects) {
          if (formsData.projects.indexOf(doc.projects[i]) === -1) {
            await Vue.prototype.$pouchStorage.removeTaskFromAnything($pouchSession, 'projects', uuidv5(doc.projects[i], UUIDNamepace), formsData._id)
            doc.projects.splice(i, 1)
          }
        }

        for (const i in formsData.projects) {
          if (doc.projects.indexOf(formsData.projects[i]) === -1) {
            await Vue.prototype.$pouchStorage.addTP($pouchSession, 'projects', uuidv5(formsData.projects, UUIDNamepace), formsData._id)
          }
        }

        for (const key in formsData) {
          if (formsData[key] !== doc[key]) {
            doc[key] = formsData[key]
          }
        }

        return $pouchSession.put(doc, {}, 'tasks').catch((error) => {
          console.error('Error on `addTask(1)`, details:', error.status, '-', error.message)
          return false
        })
      }).catch(() => {
        // add the tags and projects too...
        for (const i in formsData.tags) {
          Vue.prototype.$pouchStorage.addTP($pouchSession, 'tags', formsData.tags[i], newUUID)
        }
        for (const i in formsData.projects) {
          Vue.prototype.$pouchStorage.addTP($pouchSession, 'projects', formsData.projects[i], newUUID)
        }
        return $pouchSession.put({
          _id: newUUID,
          title: formsData.title,
          done: false,
          archived: false,
          timeToBeDone: false,
          content: formsData.content,
          tags: formsData.tags,
          projects: formsData.projects,
          timeStamp: Date.now()
        }, {}, 'tasks')
      }).then(() => true).catch((error) => {
        console.error('Error on `addTask(2)`, details:', error.status, '-', error.message)
        return false
      })

      return newUUID
    }

    Vue.prototype.$pouchStorage.deleteTask = function ($pouchSession, UUID) {
      return $pouchSession.get(UUID, {}, 'tasks').then((doc) => {
        for (const tag in doc.tags) {
          const tagUUID = uuidv5(doc.tags[tag], UUIDNamepace)

          Vue.prototype.$pouchStorage.removeTaskFromAnything($pouchSession, 'tags', tagUUID, UUID)
        }
        for (const project in doc.projects) {
          const projectUUID = uuidv5(doc.projects[project], UUIDNamepace)

          Vue.prototype.$pouchStorage.removeTaskFromAnything($pouchSession, 'projects', projectUUID, UUID)
        }

        Vue.prototype.$pouchStorage.deleteDBItem($pouchSession, 'tasks', UUID)
      }).catch((error) => {
        console.error('Error on `deleteTask`, details:', error.status, '-', error.message)
        return false
      })
    }
    /**
     * Tags DB Methods
     */
    Vue.prototype.$pouchStorage.addTP = function ($pouchSession, dbName, itemName, taskUUID) {
      return $pouchSession.get(uuidv5(itemName, UUIDNamepace), {}, dbName).then(async (doc) => {
        if (doc.itemsWith.indexOf(taskUUID) === -1) {
          doc.itemsWith.push(taskUUID)

          await $pouchSession.put(doc, {}, dbName).catch((error) => {
            console.error('Error on `addTP(1)`, details:', error.status, '-', error.message)
            return false
          })
        }
        return true
      }).catch(() => {
        return $pouchSession.put({
          _id: uuidv5(itemName, UUIDNamepace),
          name: itemName,
          itemsWith: [taskUUID]
        }, {}, dbName)
      }).catch((error) => {
        console.error('Error on `addTP(2)`, details:', error.status, '-', error.message)
        return false
      })
    }

    Vue.prototype.$pouchStorage.removeTaskFromAnything = function ($pouchSession, dbName, UUID, taskUUID) {
      return $pouchSession.get(UUID, {}, dbName).then((doc) => {
        if (doc.itemsWith.length === 1) {
          return $pouchSession.remove(doc, {}, dbName)
        } else {
          doc.itemsWith.splice(doc.itemsWith.indexOf(taskUUID), 1)
          return $pouchSession.put(doc, {}, dbName)
        }
      }).catch((error) => {
        console.error('Error on `removeTaskFromAnything`, details:', error.status, '-', error.message)
        return false
      })
    }

    Vue.prototype.$pouchStorage.addTPOnTasks = function ($pouchSession, dbName, UUID, itemName) {
      return $pouchSession.get(UUID, {}, 'tasks').then((doc) => {
        if (doc[dbName].indexOf(itemName) === -1) {
          doc[dbName].push(itemName)
          return $pouchSession.put(doc, {}, 'tasks')
        }
        return true
      }).catch((error) => {
        console.error('Error on `addTPOnTasks`, details:', error.status, '-', error.message)
        return false
      })
    }

    Vue.prototype.$pouchStorage.editTPFromTasks = function ($pouchSession, dbName, UUID, newName) {
      return $pouchSession.get(UUID, {}, dbName).then((doc) => {
        $pouchSession.remove(doc, {}, dbName)

        for (const item in doc.itemsWith) {
          $pouchSession.get(doc.itemsWith[item], {}, 'tasks').then((taskDoc) => {
            taskDoc[dbName].splice(taskDoc[dbName].indexOf(doc.name), 1, newName)
            $pouchSession.put(taskDoc, {}, 'tasks')
          })
        }

        return doc
      }).then((doc) => {
        return $pouchSession.put({
          _id: uuidv5(newName, UUIDNamepace),
          name: newName,
          itemsWith: doc.itemsWith
        }, {}, dbName)
      }).catch((error) => {
        console.error('Error on `editTPFromTasks`, details:', error.status, '-', error.message)
        return false
      })
    }

    Vue.prototype.$pouchStorage.deleteTPFromTasks = function ($pouchSession, dbName, UUID) {
      return $pouchSession.get(UUID, {}, dbName).then(async (doc) => {
        $pouchSession.remove(doc, {}, dbName)

        for (const item in doc.itemsWith) {
          await $pouchSession.get(doc.itemsWith[item], {}, 'tasks').then(async (taskDoc) => {
            taskDoc[dbName].splice(taskDoc[dbName].indexOf(doc.name), 1)
            await $pouchSession.put(taskDoc, {}, 'tasks')
          })
        }
      }).catch((error) => {
        console.error('Error on `editTPTasks`, details:', error.status, '-', error.message)
        return false
      })
    }
    /**
     * General Methods
     */
    Vue.prototype.$pouchStorage.getDBItem = function ($pouchSession, dbName, UUID) {
      return $pouchSession.get(UUID, {}, dbName).then((doc) => {
        return doc
      }).catch((error) => {
        console.error('Error on `getDBItem`, details:', error.status, '-', error.message)
        return false
      })
    }

    Vue.prototype.$pouchStorage.fetchItemsDB = function ($pouchSession, dbName, options) {
      return $pouchSession.find(options.query, dbName).then((response) => {
        if (response && response.docs.length > 0) {
          return response.docs
        } else {
          return []
        }
      }).catch((error) => {
        console.error('Error on `fetchItemsDB`, details:', error.status, '-', error.message)
        return false
      })
    }

    Vue.prototype.$pouchStorage.fetchNumberOfItems = function ($pouchSession, dbName) {
      return $pouchSession.info(dbName).then((info) => {
        return info.doc_count
      }).catch((error) => {
        console.error('Error on `fetchNumberOfItems`, details:', error.status, '-', error.message)
        return 0
      })
    }

    Vue.prototype.$pouchStorage.editDBItemAsObject = function ($pouchSession, dbName, UUID, newData) {
      return $pouchSession.get(UUID, {}, dbName).then((doc) => {
        for (const key in newData) {
          if (newData[key] !== doc[key]) {
            doc[key] = newData[key]
          }
        }
        return $pouchSession.put(doc, {}, dbName)
      }).catch((error) => {
        console.error('Error on `editDBItemAsObject`, details:', error.status, '-', error.message)
        return false
      })
    }

    Vue.prototype.$pouchStorage.deleteDBItem = function ($pouchSession, dbName, UUID) {
      return $pouchSession.get(UUID, {}, dbName).then((doc) => {
        return $pouchSession.remove(doc, {}, dbName)
      }).catch((error) => {
        console.error('Error on `deleteDBItem`, details:', error.status, '-', error.message)
        return false
      })
    }
  }
}
