<template>
  <v-container fluid fill-height >
    <v-layout align-center justify-center>
    <v-flex md4>
      <v-card class="elevetion-12" style="background: #e8dbdb">
        <v-toolbar style="background: #734f4f; color: #dac7c7; text-align: center">
          КОНТАКТЫ
        </v-toolbar>
        <v-card-text style="font-size: 20px; text-align: center">
          <v-btn icon style="font-size: 20px"><v-icon left>mdi-gmail</v-icon></v-btn><b>EMAIL:  </b> lampetta@gmail.com<br><br>
          <v-btn icon style="font-size: 20px"><v-icon left>mdi-cellphone</v-icon></v-btn><b>PHONE:</b> 8 (978) 869 52 23 - Ольга<br><br>
          <v-btn icon style="font-size: 20px"><v-icon left>mdi-cellphone</v-icon></v-btn><b>PHONE:</b> 8 (978) 869 52 49 - Андреас<br><br>
          <v-btn icon style="font-size: 20px"><v-icon left>mdi-whatsapp</v-icon></v-btn><b>WHATSAPP:</b> 8 (978) 869 52 23<br><br>
          <v-btn icon style="font-size: 20px"><v-icon left>mdi-viber</v-icon></v-btn><b>VIBER:</b> 8 (978) 869 52 23
        </v-card-text>
      </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>