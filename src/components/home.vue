
<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
                v-for="ad in ads"
                :key="ad.id"
                :src="ad.src"
            >
              <div id="ad-link" >
                <v-btn :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4
                v-for="ad in ads"
                :key="ad.id"
        >
          <v-card>
            <v-img
                :src="ad.src"
                height="200px"
            ></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0"><b>{{ad.title}}</b></h3>
                <div style="font-size: 14px">{{ad.desc}}</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn text :to="'/ad/' + ad.id">
                Купить
              </v-btn>
              <v-btn raised color="primary">
                Посмотреть
              </v-btn>
            </v-card-actions>

          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      ads:[
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

      ]
    }
  }
}
</script>
<style scoped>
#ad-link {
  position:absolute;
  bottom: 50px;
  left:50%;
  background: rgba(238, 228, 228, 0.5);
  transform: translate(-50%,0);
  padding: 5px 15px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
</style>