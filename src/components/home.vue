
<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs20 >
          <v-carousel>
            <v-carousel-item
                v-for="ad in ads"
                :key="ad.id"
                :src="ad.src"
            >
              <div class="ad-linklala" >
                <v-btn :to="'/ad/' + ad.id" style="background: rgba(255,255,255,0.47)">{{ ad.title }}</v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid style='color: #ffffff; font-size: 30px; text-align: center; font-family: "Candara Light"'>
      ШИРОКИЙ АССОРТИМЕНТ ТОВАРОВ ИЗ ЕВРОПЫ, КИТАЯ, КОРЕИ
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4
                v-for="ad in ads"
                :key="ad.id"
        >
          <!-- bootstrap size check -->
          <v-card>
            <v-img
                :src="ad.src"
                height="200px"
            ></v-img>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0"><b>{{ad.title}}</b></h3>
              </div>
            </v-card-title>
            <v-card-text>
              <div style="font-size: 14px">{{ad.desc}}</div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn :to="'/ad/' + ad.id" raised color="primary">
                Как узнать ассортимент?
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
          title:"ГОЛОВНЫЕ УБОРЫ",
          desc:"Описание к головным уборам",
          promo: true,
          src: "https://cs1.livemaster.ru/storage/94/9c/0aa99f42484da538c7c75992beaq--aksessuary-modnaya-shapka-s-otvorotom-i-pomponom-traek.jpg",
          id:"1"
        },
        {
          title:"АКСЕССУАРЫ",
          desc:"Описание",
          promo: true,
          src: "https://ae01.alicdn.com/kf/Hdf0ab54a52c546c78de5635dbbb203c7n/-.jpg_q50.jpg",
          id:"2"
        },
        {
          title:"ОДЕЖДА",
          desc:"Описание",
          promo: true,
          src: "http://d.zaix.ru/rosj.png",
          id:"3"
        },
        {
          title:"ВЕРХНЯЯ ОДЕЖДА",
          desc:"Описание",
          promo: true,
          src: "https://images.ru.prom.st/572324202_w640_h640_stilnaya-zimnyaya-zhenskaya.jpg",
          id:"4"
        },
        {
          title:"ОБУВЬ",
          desc:"Описание",
          promo: true,
          src: "https://avatars.mds.yandex.net/i?id=2a00000179efc64662e3160faf3c43b818fa-4395348-images-thumbs&n=13",
          id:"5"
        },
        {
          title:"НИЖНЕЕ БЕЛЬЕ",
          desc:"Описание",
          promo: true,
          src: "https://avatars.mds.yandex.net/i?id=2a00000179efc64662e3160faf3c43b818fa-4395348-images-thumbs&n=13",
          id:"6"
        },

      ]
    }
  }
}
</script>
<style scoped>
.ad-linklala {
  position:absolute;
  bottom: 50px;
  left:50%;
  background: rgba(238, 228, 228, 0.25);
  transform: translate(-50%,0);
  padding: 5px 15px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
</style>