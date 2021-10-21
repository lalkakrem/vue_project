
import Router from 'vue-router'
import Home from '@/components/home'
import Me from '@/components/info/Me'
import Contact from '@/components/info/Contact'
import Login from '@/components/auth/Login'
import Registration from '@/components/auth/Registration'
import News from '@/components/info/News'

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
            name:"Login",
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
