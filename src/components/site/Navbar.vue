<template>
  <b-navbar :shadow="true" :fixed-top="true" type="is-danger">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="/images/logo.png"
                    alt="To-do List"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
          <b-navbar-item href="#">
              <b-icon icon="home"></b-icon>
              <span>
                Home
              </span>
          </b-navbar-item>
          <b-navbar-item href="#">
              <b-icon icon="information"></b-icon>
              <span>
                ??
              </span>
          </b-navbar-item>
        </template>

        <template slot="end">
          <b-navbar-item tag="div">
            <b-field>
              <b-input placeholder="Search for items, tags and projects" type="search" icon="magnify"></b-input>
              <p class="control">
                  <button class="button is-info">Search</button>
              </p>
             </b-field>
          </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
export default {
  name: 'SiteNavbar'
}
</script>
