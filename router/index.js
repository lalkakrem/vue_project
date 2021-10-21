
import Router from 'vue-router'
import Home from '@/components/home'
import Contact from '@/components/info/Contact'
import News from '@/components/info/News'
import Me from '@/components/info/Me'
import Login from '@/components/auth/Login'
import Registration from '@/components/auth/Registration'

export default new Router({
    routes: [
        {
            path:"",
            name:"home",
            component: Home
        },
        {
            path:"/contact",
            name:"contact",
            component:Contact
        },
        {
            path:"/me",
            name:"me",
            component: Me
        },
        {
            path:"/login",
            name:"login",
            component: Login
        },
        {
            path:"/registration",
            name: "reg",
            component: Registration
        },
        {
            path: "/news",
            name: "news",
            component: News
        }
    ],
    mode: 'history'
})
