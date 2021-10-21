import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#503434',
                secondary: '#7c4b4b',
                accent: '#593030',
                error: '#9a1212',
            },
        },
    },
});

Vue.use(Vuetify);



export default new Vuetify({
});