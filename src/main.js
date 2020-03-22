/**
 * Packages import
 */
import Vue from 'vue'
import Buefy from 'buefy'
import PouchDB from 'pouchdb-browser'
import PouchVue from 'pouch-vue'
import PouchFind from 'pouchdb-find'
import PouchLiveFind from 'pouchdb-live-find'
/**
 * Local files import
 */
import App from './App.vue'
import router from './router'
import PouchStorage from './storage/pouchStorage'

/**
 * Importing files from packages
 */
import 'buefy/dist/buefy.css'
import '@mdi/font/css/materialdesignicons.css'

/**
 * PouchDB Configuration
 */
PouchDB.plugin(PouchFind)
PouchDB.plugin(PouchLiveFind)

/**
 * Vue Configuration
 */
Vue.config.productionTip = false
Vue.use(Buefy, {
  defaultIconPack: 'mdi'
})
Vue.use(PouchVue, {
  pouch: PouchDB,
  defaultDB: 'tasks'
})
Vue.use(PouchStorage)

/**
 * Custom firebase functions
 */
Vue.mixin({
  methods: Storage
})

/**
 * Creating the vue site
 */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
