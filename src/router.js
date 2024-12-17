import { createRouter, createWebHistory } from "vue-router";
import BlogDetail from "./components/pages/BlogDetail.vue";
import BlogList from "./components/pages/BlogList.vue";
import Home from "./components/pages/Home.vue";
import Toolbar from "./components/Toolbar.vue";




const routes = [

  { path: '/', component: Toolbar },
  { path: '/Home', component: Home },
  { path: '/BlogList', component: BlogList },
  { path: '/BlogDetail', component: BlogDetail },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
