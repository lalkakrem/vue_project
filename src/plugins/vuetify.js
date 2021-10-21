import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#800c16',
                secondary: '#7c4b4b',
                accent: '#311818',
                error: '#b71c1c',
            },
        },
    },
});

Vue.use(Vuetify);



export default new Vuetify({
});