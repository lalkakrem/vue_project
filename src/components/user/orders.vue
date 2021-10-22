<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="mb-3 mt-3" style="color: #7a5050">Мои заказы:</h1>

        <v-list style="background: #c5b3b3">
          <v-list-item
              v-for="order in orders"
              :key="order.id"
              style="margin: 4px; background: #e8dfdf; "
          >
            <v-list-item-action>
              <v-checkbox
                  :input-value="order.done"
                  color="secondary"
                  @click="markDone(order)"
              ></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ order.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle><br>
              <v-list-item-subtitle><b>Статус:</b> {{ order.status }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn
                  class="primary"
                  :to="'/ad/' + order.adId"
              >Просмотреть</v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      orders: [
        {
          id:"23123",
          name:"Заказ #23123",
          phone:"+797872727272",
          adId:"1",
          status:"Завершён",
          done:true
        },
        {
          id:"45345",
          name:"Заказ #45345",
          phone:"+797872727272",
          adId:"6",
          status:"Отправлен",
          done:false
        },

      ]
    }
  },
  methods: {
    markDone(order) {
      order.done = !order.done
      console.log(order.done)
    }
  }
}
</script>
