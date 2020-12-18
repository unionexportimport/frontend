import { createRouter, createWebHistory } from "vue-router";
const Home = () => import("../views/Home.vue");
const Login = () => import("../views/auth/Login.vue");
const UAC = () => import("../views/uac/UAC.vue");
const Warehouse = () => import("../views/warehouse/Index.vue");
const Sale = () => import("../views/sale/Index.vue");
const Product = () => import("../views/product/Index.vue");
const Customer = () => import("../views/customer/Customer.vue");
const UserCreate = () => import("../views/uac/UserCreate.vue");
const UserEdit = () => import("../views/uac/UserEdit.vue");
const CustomerCreate = () => import("../views/customer/CustomerCreate.vue");
const CustomerEdit = () => import("../views/customer/CustomerEdit.vue");

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/user-access-control",
    name: "uac",
    component: UAC
  },
  {
    path: "/product",
    name: "product",
    component: Product
  },
  {
    path: "/warehouse",
    name: "warehouse",
    component: Warehouse
  },
  {
    path: "/sale",
    name: "sale",
    component: Sale
  },
  {
    path:"/customer",
    name:"Customer",
    component:Customer
  },
  {
    path: "/user-access-control/create",
    name: "UserCreate",
    component: UserCreate
  },
  {
    path: "/user-access-control/edit",
    name: "UserEdit",
    component: UserEdit
  },
  {
    path: "/customer/create",
    name: "CustomerCreate",
    component: CustomerCreate
  },
  {
    path: "/customer/edit",
    name: "CustomerEdit",
    component: CustomerEdit
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
