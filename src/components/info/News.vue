
<template>

  <v-container fluid fill-height>
    <v-layout align-center justify-center >
      <v-container grid-list-lg>
        <v-toolbar-title style="color: #503434; font-size: 27px; transform: translate(+10%,-20%);">Лента новостей</v-toolbar-title>
        <v-layout row wrap>
          <v-flex xs12 sm6 md20
                  v-for="news in news"
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
                  <div style="font-size: 14px">{{news.desc}}</div>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn raised color="primary" text :to="'/news/' + news.id" >
                  Читать
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
      news:[
        {
          title:"Хуа Чэн",
          desc:"Это китаец я не знаю что еще вставлять",
          promo: true,
          src: "https://pbs.twimg.com/media/EalIX3OXYAAitwa.jpg",
          id:"1"
        },
        {
          title:"Се Лянь",
          desc:"Это китаец я не знаю что еще вставлять",
          promo: true,
          src: "http://d.zaix.ru/rnhh.jpg",
          id:"2"
        },
        {
          title:"Вэй У Сянь",
          desc:"Это китаец я не знаю что еще вставлять",
          promo: true,
          src: "http://d.zaix.ru/rnhj.png",
          id:"3"
        },
        {
          title:"Лань Чжань",
          desc:"Это китаец я не знаю что еще вставлять",
          promo: true,
          src: "http://d.zaix.ru/rnhn.png",
          id:"4"
        },
        {
          title:"Цзинь Лин",
          desc:"Это китаец",
          promo: true,
          src: "http://d.zaix.ru/rnho.png",
          id:"5"
        },
        {
          title:"Ши Цинсюань",
          desc:"Это китаец я не знаю что еще вставлять",
          promo: true,
          src: "http://d.zaix.ru/rnhq.png",
          id:"6"
        },
        {
          title:"Лань Чжань",
          desc:"Это китаец я не знаю что еще вставлять",
          promo: true,
          src: "http://d.zaix.ru/rnhn.png",
          id:"4"
        },
        {
          title:"Цзинь Лин",
          desc:"Это китаец",
          promo: true,
          src: "http://d.zaix.ru/rnho.png",
          id:"5"
        },
        {
          title:"Ши Цинсюань",
          desc:"Это китаец я не знаю что еще вставлять",
          promo: true,
          src: "http://d.zaix.ru/rnhq.png",
          id:"6"
        },
        {
          title:"Лань Чжань",
          desc:"Это китаец я не знаю что еще вставлять",
          promo: true,
          src: "http://d.zaix.ru/rnhn.png",
          id:"4"
        },
        {
          title:"Цзинь Лин",
          desc:"Это китаец",
          promo: true,
          src: "http://d.zaix.ru/rnho.png",
          id:"5"
        },
        {
          title:"Ши Цинсюань",
          desc:"Это китаец я не знаю что еще вставлять",
          promo: true,
          src: "http://d.zaix.ru/rnhq.png",
          id:"6"
        },

      ]
    }
  }
}
</script>