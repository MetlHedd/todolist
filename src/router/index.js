/**
 * Modules import
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

/**
 * Local files import
 */
import Home from '../views/Home.vue'
import TasksSeeItem from '../views/tasks/SeeItem.vue'
import TasksNewItem from '../views/tasks/NewItem.vue'
import TagsList from '../views/tags/Items.vue'
import ProjectList from '../views/projects/Items.vue'
import GeneralSettings from '../views/settings/General.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: {
      getArchived: false,
      getActive: true
    }
  },
  {
    path: '/tasks/see/:id',
    name: 'TasksSeeItem',
    component: TasksSeeItem
  },
  {
    path: '/tasks/new/',
    name: 'TasksNewItem',
    component: TasksNewItem
  },
  {
    path: '/tasks/edit/:id',
    name: 'TaskEditItem',
    component: TasksNewItem
  },
  {
    path: '/projects',
    name: 'ProjectsItems',
    component: ProjectList
  },
  {
    path: '/tags',
    name: 'TagsItems',
    component: TagsList
  },
  {
    path: '/settings',
    name: 'GeneralSettings',
    component: GeneralSettings
  }
]

const router = new VueRouter({
  base: process.env.NODE_ENV === 'production' ? '/todolist/' : '/',
  mode: 'history',
  routes
})

export default router
