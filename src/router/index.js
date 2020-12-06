import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("../views/Home.vue");
const Login = () => import("../views/auth/Login.vue");
const UAC = () => import("../views/uac/UAC.vue");
const Customer=()=> import("../views/customer/Customer.vue");
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/user-access-control",
    name: "UAC",
    component: UAC
  },
  {
    path:"/customer",
    name:"Customer",
    component:Customer
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
