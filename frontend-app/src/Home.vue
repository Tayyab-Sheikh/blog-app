<template>
  <div class="blog-container">
    <h1>Welcome to my blogs!</h1>

    <em v-if="loading">Loading articles...</em>

    <ul v-if="articles.length" class="article-list">
      <li v-for="article in articles" :key="article.article_id" class="article-item">
        <h3 class="article-title">{{ article.title }}</h3>
        <p class="article-author">by {{ article.author }}</p>
        <p class="article-content">{{ article.content }}</p>
      </li>
    </ul>

    <div v-if="error" class="error">
      {{ error }}
    </div>
  </div>
</template>

<script>
import { articleService } from "../src/services/articles.services";

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
};
</script>

<style>
body {
  margin: 0;
  /* Remove default body margin */
  background-color: #f7dfaf;
  /* Set the background color */
  font-family: Arial, sans-serif;
  /* Set the font family */
}

.blog-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  text-align: center;
  color: #007bff;
  /* Header text color */
  margin-bottom: 20px;
}

em {
  display: block;
  text-align: center;
  color: #666;
}

.article-list {
  list-style: none;
  padding: 0;
}

.article-item {
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 5px;
  background-color: #fff;
  /* List item background color */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  /* Add a subtle box shadow */
}

.article-title {
  font-size: 20px;
  color: #007bff;
  margin: 0;
  margin-bottom: 5px;
}

.article-author {
  font-size: 14px;
  color: #555;
  margin: 0;
  margin-bottom: 10px;
}

.article-content {
  font-size: 16px;
  color: #333;
  line-height: 1.6;
}

.error {
  color: red;
  text-align: center;
  margin-top: 20px;
}

/* Fix the scroll issue */
html,
body {
  overflow: auto;
  /* Restore the default scroll behavior */
}</style>