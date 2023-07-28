import { createRouter, createWebHistory } from 'vue-router';

import Home from "../Home.vue";
import Login from "../Login.vue";
import Register from '../Register.vue';
import NotFound from '../NotFound.vue';
import Article from '../Article.vue'
import Articles from '../Articles.vue'
import AddArticle from '../AddArticle.vue'

const ifAuthenticated = (to, from, next) => {

  const loggedIn = localStorage.getItem('session_token');

  if (loggedIn) {
    next()
    return
  }
  next('/')

}

const routes = [
  { path: "/", component: Login },
  { path: "/register", component: Register },
  { path: "/articles", component: Articles, beforeEnter: ifAuthenticated },
  { path: "/addArticle", component: AddArticle, beforeEnter: ifAuthenticated },
  { path: "/articles/:id", component: Article, beforeEnter: ifAuthenticated },
  { path: "/:pathMatch(.*)*", component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;