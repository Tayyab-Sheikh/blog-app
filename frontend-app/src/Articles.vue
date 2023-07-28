<template>
  <div>
    <div
      style="background-color: brown; padding: 10px; display: flex; justify-content: space-between; align-items: center;">
      <h1 style="color: white; font-size: 28px; font-weight: bold; margin: 0;">My Blog App</h1>
      <div>
        <router-link to="/" style="color: brown; text-decoration: none; margin-right: 20px;">Dashboard</router-link>
        <button @click="handleAddArticle"
          style="background-color: #f7dfaf; color: brown; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer; margin-right: 10px;">Add
          Article</button>
        <button @click="handleLogout"
          style="background-color: #f7dfaf; color: brown; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">Logout</button>
      </div>
    </div>

    <div style="max-width: 800px; margin: 0 auto; padding: 20px; color: black; font-family: Arial, sans-serif;">
      <h1 style="font-size: 28px; font-weight: bold; margin-bottom: 20px; color: brown;">Welcome to my blogs!</h1>

      <em v-if="loading" style="font-style: italic; margin-bottom: 10px;">Loading articles...</em>

      <ul v-if="articles.length" style="list-style: none; padding: 0;">
        <li v-for="article in articles" :key="article.article_id"
          style="margin-bottom: 10px; border: 1px solid brown; border-radius: 5px; padding: 10px;">
          <router-link :to="'/articles/' + article.article_id"
            style="color: brown; text-decoration: none; font-weight: bold;">
            {{ article.title + ' by ' + article.author }}
          </router-link>
        </li>
      </ul>

      <div v-if="error" style="color: red; font-weight: bold; margin-top: 20px;">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import { articleService } from "../src/services/articles.services";
import { authService } from "../src/services/login.services";

export default {
  data() {
    return {
      articles: [],
      error: "",
      loading: true,
    };
  },
  mounted() {
    articleService
      .getAll()
      .then((articles) => {
        this.articles = articles;
        this.loading = false;
      })
      .catch((error) => (this.error = error));
  },
  methods: {
    handleAddArticle() {
      this.$router.push("/addArticle");
    },
    handleLogout() {

      authService.logout().then(res => {

        console.log(localStorage.removeItem('session_token'), `token`)
        // Remove the token from localStorage
        localStorage.removeItem('session_token');

        // Redirect the user to the login page
        this.$router.push('/');
      }).catch(err => console.log(err))

    },
  },
};
</script>
