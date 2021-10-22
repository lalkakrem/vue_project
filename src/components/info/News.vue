
<template>
  <div>
  <v-container >
    <v-layout row >
      <v-flex >
        <v-carousel>
          <v-carousel-item
              v-for="ad in news"
              :key="ad.id"
              :src="ad.src"
          >
            <div id="ad-link2">
              <v-toolbar-text  style="color: #e7d9d9; font-size: 15px; max-width: 20px">{{ad.desc}}</v-toolbar-text>
            </div>

          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
  </v-container>
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
                <v-btn raised color="light_all2"  :to="'/news/' + news.id" >
                  Читать
                </v-btn>

              </v-card-actions>

            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-layout>
  </v-container>
  </div>
</template>

<style scoped>
#ad-link2 {
  text-align: center;
  position: absolute;
  bottom: 50px;
  left:50%;
  background: rgba(80, 52, 52, 0.66);
  transform: translate(-50%,0);
  padding: 3%;
  min-width: 100%;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
</style>

<script>
export default {
  data () {
    return {
      news:[
        {
          title:"Хуа Чэн",
          desc:"Это китаец я не знаю что еще вставлять его зовут Хуа Чэн",
          promo: true,
          src: "https://pbs.twimg.com/media/EalIX3OXYAAitwa.jpg",
          id:"1"
        },
        {
          title:"Се Лянь",
          desc:"Это китаец я не знаю что еще вставлять его зовут Се Лянь или Его Высочество Наследный Принц",
          promo: true,
          src: "http://d.zaix.ru/rnhh.jpg",
          id:"2"
        },
        {
          title:"Вэй У Сянь",
          desc:"Это китаец я не знаю что еще вставлять его зовут Вэй У Сянь",
          promo: true,
          src: "http://d.zaix.ru/rnhj.png",
          id:"3"
        },
        {
          title:"Лань Чжань",
          desc:"Это китаец я не знаю что еще вставлять его зовут Лань Чжань но вообще-то он Хан Гуан Цзюнь",
          promo: true,
          src: "http://d.zaix.ru/rnhn.png",
          id:"4"
        },
        {
          title:"Цзинь Лин",
          desc:"Это китаец он противный но милый МНЕ НУЖНО БОЛЬШЕ ТЕКСТА ДЛЯ ПРОВЕРКИ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ",
          promo: true,
          src: "http://d.zaix.ru/rnho.png",
          id:"5"
        },
        {
          title:"Ши Цинсюань",
          desc:"Это китаец я не знаю что еще вставлять ПОЧЕМУ ОНО НЕ РАБОТАЕТ",
          promo: true,
          src: "http://d.zaix.ru/rnhq.png",
          id:"6"
        },
        {
          title:"Лань Чжань",
          desc:"Это китаец я не знаю что еще вставлять",
          promo: true,
          src: "http://d.zaix.ru/rnhn.png",
          id:"7"
        },
        {
          title:"Цзинь Лин",
          desc:"Это китаец",
          promo: true,
          src: "http://d.zaix.ru/rnho.png",
          id:"8"
        },
        {
          title:"Ши Цинсюань",
          desc:"Это китаец я не знаю что еще вставлять",
          promo: true,
          src: "http://d.zaix.ru/rnhq.png",
          id:"9"
        },
        {
          title:"Лань Чжань",
          desc:"Это китаец я не знаю что еще вставлять",
          promo: true,
          src: "http://d.zaix.ru/rnhn.png",
          id:"10"
        },
        {
          title:"Цзинь Лин",
          desc:"Это китаец",
          promo: true,
          src: "http://d.zaix.ru/rnho.png",
          id:"11"
        },
        {
          title:"Ши Цинсюань",
          desc:"Это китаец я не знаю что еще вставлять",
          promo: true,
          src: "http://d.zaix.ru/rnhq.png",
          id:"12"
        },

      ]
    }
  }
}
</script>