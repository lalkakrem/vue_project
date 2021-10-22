import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#503434',
                secondary: '#7c4b4b',
                accent: '#593030',
                light_all: "#c5b3b3",
                light_all2: "#c09a9a",
                error: '#9a1212',
            },
        },
    },
});

Vue.use(Vuetify);



export default new Vuetify({
});