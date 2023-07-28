<template>
  <div>
    <!-- Navigation Bar -->
    <div
      style="display: flex; justify-content: space-between; align-items: center; background-color: brown; padding: 10px; color: white; border-radius: 5px 5px 0 0;">
      <h1 style="font-size: 28px; font-weight: bold; margin: 0; color: white;">My Blog App</h1>
      <div>
        <button @click="handleArticlesClick"
          style="background-color: #f7dfaf; color: black; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer; margin-right: 10px;">Articles</button>
        <button @click="handleLogout"
          style="background-color: #f7dfaf; color: black; border: none; padding: 8px 13px; border-radius: 4px; cursor: pointer;">Logout</button>
      </div>
    </div>

    <!-- Add Article Form -->
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
      <div
        style="max-width: 400px; padding: 60px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-radius: 5px; background-color: white;">
        <div
          style="background-color: brown; padding: 10px; color: white; text-align: center; border-radius: 5px 5px 0 0;">
          <h1 style="font-size: 28px; font-weight: bold;color: white; margin: 0;">Add Article</h1>
        </div>

        <div style="max-width: 100%; padding: 20px; color: black; font-family: Arial, sans-serif;">
          <form @submit.prevent="handleSubmit" style="display: flex; flex-direction: column;">
            <div style="margin-bottom: 10px;">
              <label for="title">Title:</label>
              <input type="text" v-model="title" required
                style="padding: 8px; border: 1px solid #ccc; border-radius: 5px;" />
            </div>

            <div style="margin-bottom: 10px;">
              <label for="author">Author:</label>
              <input type="text" v-model="author" required
                style="padding: 8px; border: 1px solid #ccc; border-radius: 5px;" />
            </div>

            <div style="margin-bottom: 10px; flex: 1;">
              <label for="content">Content:</label>
              <textarea v-model="content" required
                style="padding: 8px; border: 2px solid #ccc; border-radius: 5px; background-color: #f9f9f9; width: 100%; height: 150px;"></textarea>
            </div>

            <div style="margin-bottom: 10px;">
              <label for="publishDate">Publish Date:</label>
              <input type="date" v-model="publishDate" required
                style="padding: 8px; border: 1px solid #ccc; border-radius: 5px;" />
            </div>

            <button type="submit"
              style="background-color: brown; color: white; border: none; padding: 12px 24px; border-radius: 4px; cursor: pointer;">Add
              Article</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { articleService } from './services/addArticle.services';

export default {
  data() {
    return {
      article: {
        title: "",
        author: "",
        content: "",
        publishDate: "",
      },
    };
  },
  methods: {
    handleSubmit() {

      articleService.addArticle(this.title, this.author, this.publishDate, this.content)
        .then((res) => {
          this.$router.push('/articles')
        })
        .catch((error) => (this.error = error));

    },
    handleArticlesClick() {
      this.$router.push('/articles')
    },
    handleLogout() {

    },
  },
};
</script>
