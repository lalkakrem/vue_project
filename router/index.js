
import Router from 'vue-router'
import Home from '@/components/home'
import Me from '@/components/info/Me'
import Contact from '@/components/info/Contact'
import Login from '@/components/auth/Login'
import Registration from '@/components/auth/Registration'
import News from '@/components/info/News'
import Ad from '@/components/ads/Ad'
import AdList from '@/components/ads/AdList'
import NewAd from '@/components/ads/NewAd'
import Orders from '@/components/user/orders'
import Shops from '@/components/info/shops'

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
        },
        {
            path:"/ad/:id",
            name:"ad",
            component:Ad
        },
        {
            path:"/list",
            name:"list",
            component: AdList
        },
        {
            path:"/new",
            name:"newAd",
            component: NewAd
        },
        {
            path:"/orders",
            name:"orders",
            component: Orders
        },
        {
            path:"/shops",
            name:"shops",
            component: Shops
        }

    ],
    mode: 'history'
})
