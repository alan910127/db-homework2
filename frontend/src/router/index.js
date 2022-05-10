import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue"
import LoginView from "@/views/LoginView.vue"
import SigninPage from "@/components/SigninPage.vue"
import SignupPage from "@/components/SignupPage.vue"
import UserProfile from "@/components/UserProfile.vue"
import SearchShop from "@/components/SearchShop.vue"

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "/profile",
        name: "profile",
        component: UserProfile
      },
      {
        path: "/shop",
        name: "shop",
        component: SearchShop
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    children: [
      {
        path: "/signin",
        name: "signin",
        component: SigninPage
      },
      {
        path: "/signup",
        name: "signup",
        component: SignupPage
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
