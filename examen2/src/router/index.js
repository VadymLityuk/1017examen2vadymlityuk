import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const Accueil = () => import( "../views/Accueil.vue");
const Contact = () =>
  import( "../views/Contact.vue");
const Projet = () =>
  import( "../views/Project.vue");

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Accueil
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projet
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});

export default router;