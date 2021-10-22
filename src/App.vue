<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer" style="background: #dac7c7" >
      <v-list-item style="background: #503434">
        <v-list-item-content>
          <v-list-item-title class="title" style="color: #e8dbdb">
            КИПУ
          </v-list-item-title>
          <v-list-item-subtitle style="color: #c5b3b3">
            Учебный проект
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item-group style="color: #c5b3b3">
          <v-list-item style="color: #754949" v-for="link in menu" :key="link.title" :to="link.url" >
            <v-list-item-icon>
              <v-icon style="color: #623434">{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ link.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app dark style="background: #734f4f" >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-btn text to="/">Главная</v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn style="color: #e7bbbb" v-for="link in links" :key="link.title" :to="link.url"  text><v-icon style="color: #cea0a0" left>{{ link.icon }}</v-icon>{{ link.title }}</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-main style="background: #c5b3b3" >
      <router-view></router-view>
    </v-main>

    <v-footer padless style="background: #734f4f; color: #ead5d5" >
      <v-col
          class="text-center"
          cols="12"
      >
        Это красивый подвал
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        {title:"Вход", icon:"mdi-account-check", url:"/login"},
        {title:"Регистрация", icon:"mdi-account-circle-outline", url:"/registration"},
        {title:"Контакты", icon:"mdi-bell", url:"/contact"}
      ],
      menu: [
        {title:"Личный кабинет", icon:"mdi-account", url:"/me"},
        {title:"Новости", icon:"mdi-newspaper", url:"/news"},
        {title:"Заказы", icon:"mdi-cart", url:"/orders"},
        {title:"Магазины", icon:"mdi-store", url:"/shops"}
      ]
    }

  }
}
</script>

