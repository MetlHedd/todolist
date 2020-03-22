<template>
  <div id="app">
    <SiteNavbar />
    <router-view/>
    <SiteFooter />
  </div>
</template>

<script>
import SiteFooter from '@/components/site/Footer.vue'
import SiteNavbar from '@/components/site/Navbar.vue'

export default {
  components: {
    SiteNavbar,
    SiteFooter
  }
}
</script>
