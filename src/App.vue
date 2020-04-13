<template>
  <v-app id="inspire">

  <navBar/>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        fluid
      >
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>



<script>
import NavBar from './components/NavBar.vue';

export default {
  data: () => ({
    drawer: null,
  }),
  props: {
    source: String,
  },

  components: {
      navBar: NavBar,
  },
  created() {
      this.$vuetify.theme.dark = true
      this.$store.dispatch('initNotes');
      console.log('env var: '+process.env.VUE_APP_URL);
  }
}
</script>

<style>

</style>
