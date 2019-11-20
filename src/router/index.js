import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/layout/index"),
    children: [
      {
        path: "news",
        component: () => import("@/views/richText/index"),
        meta: {
          title: "添加新闻"
        }
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login/index")
  }
];

const router = new VueRouter({
  mode: "history",
  scrollBehavior: () => ({ y: 0 }),
  routes
});

export default router;
