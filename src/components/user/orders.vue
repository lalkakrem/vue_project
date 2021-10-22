<template>
  <v-container fluid fill-height>
    <v-layout row >
      <v-flex xs12 sm6 offset-sm3 >

        <div id="app" >
          <v-app id="inspire" style="background: #c5b3b3">
            <v-card
                class="mx-auto"
                max-width="500"
            >
              <v-toolbar style="background: #734f4f; color: #c5b3b3">
                <v-toolbar-title>Мои заказы</v-toolbar-title>
              </v-toolbar>

              <v-list two-line>
                <v-list-item-group
                    v-model="selected"
                    active-class="accent--text"
                    multiple
                >
                  <template v-for="(item, index) in orders">
                    <v-list-item :key="item.title">
                      <template v-slot:default="{ active }">
                        <v-list-item-content>
                          <v-list-item-title v-text="item.name"></v-list-item-title><br>
                          <v-list-item-subtitle v-text="item.phone"></v-list-item-subtitle><br>
                          <v-list-item-subtitle v-text="item.id"></v-list-item-subtitle><br>
                          Статус: <v-list-item-subtitle v-text="item.status"></v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                          <v-list-item-action-text v-text="item.date"></v-list-item-action-text>
                          <v-icon
                              v-if="!active"
                              color="secondary"
                          >
                            mdi-check-outline
                          </v-icon>

                          <v-icon
                              v-else
                              color="secondary"
                          >
                            mdi-check-bold
                          </v-icon>
                        </v-list-item-action>
                      </template>
                    </v-list-item>

                    <v-divider
                        v-if="index < orders.length - 1"
                        :key="index"
                    ></v-divider>
                  </template>
                </v-list-item-group>
              </v-list>
            </v-card>
          </v-app>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    selected: [2],
    orders: [
      {
        id:"49387",
        name:"Заказ №49387",
        phone:"+7(978)722-72-72",
        adId:"13",
        date: '2 дня назад',
        status: "Отправлен",

      },
      {
        id:"34242",
        name:"Заказ №34242",
        phone:"+7(978)722-72-72",
        adId:"13",
        date: '2 недели назад назад',
        status: "В пути",

      },
      {
        id:"12313",
        name:"Заказ №12313",
        phone:"+7(978)722-72-72",
        adId:"13",
        date: '4 месяца назад',
        status: "Доставлен",

      },
    ],
  })
}
</script>
