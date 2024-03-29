import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue"
import LoginView from "@/views/LoginView.vue"
import SigninPage from "@/components/SigninPage.vue"
import SignupPage from "@/components/SignupPage.vue"
import HomePage from "@/components/HomePage.vue"
import ShopPage from "@/components/ShopPage.vue"

const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "/homepage",
        name: "homepage",
        component: HomePage
      },
      {
        path: "/shoppage",
        name: "shoppage",
        component: ShopPage
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
