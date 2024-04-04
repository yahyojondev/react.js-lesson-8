import Home from "../Pages/home/Home"
import About from "../Pages/about/About"
import Contact from "../Pages/contact/Contact"
import Services from "../Pages/services/Services"
import Login from "../Pages/login/Login"
import Category from "../Pages/category/Category"

export const Routers = [
    {
        id:1,
        title:"Home",
        path:"/",
        element:<Home/>
    },
    {
        id:2,
        title:"About",
        path:"/about",
        element:<About/>
    },
    {
        id:3,
        title:"Contact",
        path:"/contact",
        element:<Contact/>
    },
    {
        id:4,
        title:"Services",
        path:"/services",
        element:<Services/>
    },
    {
        id:6,
        title:"Category",
        path:"/category",
        element:<Category/>
    },
    {
        id:5,
        title:"Login",
        path:"/login",
        element:<Login/>
    },
]

export const heroproduct = [
    {
        id:1,
        title:"Buy our products from the comfort of your home with us, everything is special with us",
        text:"Our products are of very high quality and they are guaranteed, I think you will not regret choosing our products",
        link:"wiew more",
        img:"https://avatars.mds.yandex.net/i?id=15001b37316448fed1bd02bc246a674e197ad3bc-12382358-images-thumbs&n=13"
    }
]