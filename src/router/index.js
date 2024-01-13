import {
  createRouter,
  createWebHashHistory
} from "vue-router";
import Home from "../views/Home.vue";
import Accessories from "../views/Accessories.vue";
import Stationery from "../views/Stationery.vue";
import Sale from "../views/Sale.vue";
import GiftCard from "../views/GiftCard.vue";

const routes = [
  {
    path: "/",
    component: () => Home
  },
  {
    path: "/accessories",
    component: () => Accessories
  },
  {
    path: "/stationery",
    component: () => Stationery
  },
  {
    path: "/sale",
    component: () => Sale
  },
  {
    path: "/gift-card",
    component: () => GiftCard
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;