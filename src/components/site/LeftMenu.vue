<template>
  <div class="app">
    <b-menu-list label="To-do List">
      <b-menu-item icon="format-list-checks" label="All items" tag="router-link" to="/"></b-menu-item>
      <b-menu-item icon="folder-open" label="Projects" tag="router-link" to="/projects/"></b-menu-item>
      <b-menu-item icon="tag-multiple" label="Tags" tag="router-link" to="/tags/"></b-menu-item>
      <b-menu-item icon="plus-circle" label="New" tag="router-link" to="/tasks/new/"></b-menu-item>
    </b-menu-list>
    <b-menu-list label="Calendar">
      <b-menu-item icon="calendar-today" label="Day Tasks" tag="router-link" to="/calendar/today/"></b-menu-item>
      <b-menu-item icon="calendar-week" label="Week Tasks" tag="router-link" to="/calendar/week/"></b-menu-item>
      <b-menu-item icon="calendar-month" label="Month Taks" tag="router-link" to="/calendar/month/"></b-menu-item>
    </b-menu-list>
    <b-menu-list label="Settings">
      <b-menu-item icon="cogs" label="General Settings" tag="router-link" to="/settings/"></b-menu-item>
      <b-menu-item icon="palette" label="Theme" tag="router-link" to="/theme/"></b-menu-item>
      <b-menu-item icon="reload" label="Database Reset" tag="router-link" to="/settings/reset/"></b-menu-item>
      <b-menu-item icon="information" label="About" tag="router-link" to="/about/"></b-menu-item>
    </b-menu-list>
  </div>
</template>

<script>
export default {
  name: 'SiteLeftMenu'
}
</script>
