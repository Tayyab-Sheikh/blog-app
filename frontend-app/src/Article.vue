<!-- ArticleView.vue -->
<template>
  <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
    <div style="text-align: center;">
      <h1 style="font-size: 28px; font-weight: bold; color: brown;">{{ article.title }}</h1>
      <p style="font-size: 16px;">{{ article.article_text }}</p>
      <h4 style="font-style: italic;">Author: {{ article.author }}</h4>
    </div>

    <div style="margin-top: 20px; display: flex; justify-content: center;">
      <input v-model="newComment" style="width: 300px; padding: 5px; margin-right: 10px;" type="text"
        placeholder="Add your comment here">
      <button @click="addComment"
        style="padding: 5px 10px; background-color: brown; color: #fff; border: none; cursor: pointer;">Add
        Comment</button>
    </div>

    <div v-if="comments.length" style="margin-top: 20px;">
      <h3 style="font-size: 18px; font-weight: bold;">Comments:</h3>
      <ul>
        <li v-for="comment in comments" :key="comment.id" style="margin-top: 5px;">{{ comment.text }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { articleService } from "../src/services/articles.services";

export default {
  data() {
    return {
      article: {},
      newComment: '',
      comments: [],
    };
  },
  mounted() {
    const articleId = this.$route.params.id;
    articleService.getArticleById(articleId)
      .then((article) => {
        this.article = article;
      })
      .catch((error) => {
        console.error("Error fetching the article:", error);
      });
  },
  methods: {
    addComment() {
      if (this.newComment.trim() !== '') {
        this.comments.push({ id: Date.now(), text: this.newComment });
        this.newComment = '';
      }
    },
  },
};
</script>
