<template>
  <v-app>
  <v-navigation-drawer app v-model="drawer"></v-navigation-drawer> 
  <v-app-bar app dark color="primary">
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
       <v-btn text><v-icon left>mdi-account-check</v-icon>Вход</v-btn>
       <v-btn text><v-icon left>mdi-account-circle-outline</v-icon>Регистрация</v-btn>
	     <v-btn text><v-icon left>mdi-chat</v-icon>Чат</v-btn>
	     <v-btn text><v-icon left>mdi-ear-hearing</v-icon>Новости</v-btn>
	     <v-btn text><v-icon left>mdi-cat</v-icon>Техподдержка</v-btn>
    </v-toolbar-items>
  </v-app-bar>
  <v-content>
    <router-view></router-view> 
  </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    }
  }
}
</script>
