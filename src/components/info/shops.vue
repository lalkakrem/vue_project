
<template>

  <v-container fluid fill-height>
    <v-layout align-center justify-center >
      <v-container grid-list-lg>
        <v-toolbar-title style="color: #503434; font-size: 27px; transform: translate(+3%,-33%);">Магазины:</v-toolbar-title>
        <v-layout row wrap>
          <v-flex xs12 sm6 md20
                  v-for="news in shops"
                  :key="news.id"
          >
            <v-card style="background: rgba(255,255,255,0.42)">
              <v-img
                  :src="news.src"
                  height="200px"
              ></v-img>
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0"><b>{{news.title}}</b></h3>
                </div>
              </v-card-title>
              <v-card-text>
                <div style="font-size: 14px">{{news.desc}}</div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn raised color="light_all" :to="'/news/' + news.id" >
                  Подробнее
                </v-btn>

              </v-card-actions>

            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      shops:[
        {
          title: "Магазин \"САМОРОДОК\"",
          desc:"КРЫМ, г. ФЕОДОСИЯ, ул.ЗЕМСКАЯ ,12А",
          promo: true,
          src: "https://mobimg.b-cdn.net/v3/fetch/07/07a5912517ee8e518442ba5631bf417f.jpeg",
          id:"1"
        },
        {
          title: "Магазин \"ГЕНЕРАЛ\"",
          desc:"КРЫМ, г. ФЕОДОСИЯ, ул.ЗЕМСКАЯ ,12А",
          promo: true,
          src: "https://avatars.mds.yandex.net/i?id=72b85b92eccedd88b97bb3c2be4c6aa4-4837145-images-thumbs&n=13",
          id:"2"
        },
        {
          title: "Магазин \"МАУЗЕР\"",
          desc:"КРЫМ, г. ФЕОДОСИЯ, напротив музея древностей",
          promo: true,
          src: "https://cdn.fishki.net/upload/post/201603/23/1894215/norway-nature-scenery-lake-mountains-flowers-sunrise_1600x900.jpg",
          id:"3"
        },
        {
          title: "Название магазина",
          desc:"КРЫМ, г. ФЕОДОСИЯ, ул.КРЫМСКАЯ",
          promo: true,
          src: "https://avatars.mds.yandex.net/i?id=cd807663a53e0fe5f78b7aef685bb7f6-5101081-images-thumbs&n=13",
          id:"4"
        },
      ]
    }
  }
}
</script>