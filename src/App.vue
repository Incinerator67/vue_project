<template>
  <v-app>
  <v-navigation-drawer app v-model="drawer">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          Название Музея
        </v-list-item-title>
        <v-list-item-subtitle>
          Учебный проект
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>
    <v-list dense>
      <v-list-item v-for="link in links" :key="link.title" :to="link.url">
        <template v-slot:prepend>
          <v-icon :icon="link.icon"></v-icon>
        </template>
        <v-list-item-title>{{ link.title }}</v-list-item-title>
        </v-list-item>
        <v-list-item @click="onLogout" v-if="isUserLoggedIn">
          <template v-slot:prepend>
            <v-icon icon="mdi-exit-to-app"></v-icon>
          </template>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar app dark color="primary" :elevation="15">
  <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
  <v-spacer></v-spacer>
  <v-toolbar-items class="hidden-sm-and-down">
    <v-btn v-for="link in links" :key="link.title" :to="link.url">
      <v-icon start :icon="link.icon"></v-icon>
      {{ link.title }}
    </v-btn>
  </v-toolbar-items>
  </v-app-bar>
  <v-toolbar-items class="hidden-sm-and-down">
    <v-btn v-for="link in links" :key="link.title" :to="link.url">
      <v-icon start :icon="link.icon"></v-icon>
      {{ link.title }}
    </v-btn>
    <v-btn @click="onLogout" v-if="isUserLoggedIn">
      <v-icon start icon="mdi-exit-to-app"></v-icon>
      Logout
    </v-btn>
  </v-toolbar-items>
  <v-main>
    <router-view></router-view>
  </v-main>
  <v-snackbar v-model="error" multi-line :timeout="2000" color="primary">
    {{ error }}
    <template v-slot:actions>
      <v-btn variant="text" @click="closeError">Close</v-btn>
    </template>
  </v-snackbar>
  </v-app>
</template>
<script>
  export default {
    data() {return {}},
    methods: {
      closeError () {this.$store.dispatch('clearError')},
      onLogout () {
        this.$store.dispatch('logoutUser')
        this.$router.push("/")
      }
    },
    computed: {
      isUserLoggedIn () {return this.$store.getters.isUserLoggedIn},
      error () {return this.$store.getters.error},
      links(){
        if (this.isUserLoggedIn) {return [
          {title:"Home", icon:"mdi-home", url:"/"},
          {title:"Orders",icon:"mdi-bookmark-multiple-outline", url:"/orders"},
          {title:"New ad", icon:"mdi-note-plus-outline", url:"/new"},
          {title:"My ads", icon:"mdi-view-list-outline", url:"/list"}
        ]} 
        else {return [
          {title:"Login", icon:"mdi-lock", url:"/login"},
          {title:"Registration",icon:"mdi-face",url:"/registration"},
        ]}
      }
    },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
