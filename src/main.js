import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router/index'
import store from './store'
import fb from 'firebase'


Vue.use(Router)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  router: router,
  store,
  created() {
    const firebaseConfig = {
      apiKey: "AIzaSyB9qcjlXw6iTiRiZAnZWaeglxfWXryfN-c",
      authDomain: "lampetta-cdded.firebaseapp.com",
      projectId: "lampetta-cdded",
      storageBucket: "lampetta-cdded.appspot.com",
      messagingSenderId: "83038799156",
      appId: "1:83038799156:web:b33a9a3d944f8071ab5161",
      measurementId: "G-H5TVZDH2PW"
    };
// Initialize Firebase
    fb.initializeApp(firebaseConfig);
    fb.analytics();
  }
}).$mount('#app')
