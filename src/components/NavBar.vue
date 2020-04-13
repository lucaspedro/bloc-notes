
<template lang="html">
  <v-navigation-drawer
    v-model="drawer"
    app
    clipped
  >
    <v-list dense>

      <router-link to="/" activeClass="active" tag="div" exact>
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      </router-link>

      <router-link to="/new-note" activeClass="active" tag="div">
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-settings</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>New Note</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      </router-link>

      <router-link to="/notes" activeClass="active" tag="div">
      <v-list-item link>
        <v-list-item-action>
          <v-icon>mdi-settings</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Notes</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      </router-link>

    </v-list>

  </v-navigation-drawer>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
