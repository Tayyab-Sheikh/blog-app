<template>
  <div>
    <div class="header">
      <h1 :style="{
        color: 'white',
        fontSize: '32px',
        margin: '0',
      }">
        My Blog App
      </h1>
      <router-link to="/">
        <button class="register-button">Login</button>
      </router-link>
    </div>
    <div class="register-container">
      <div class="card" :class="{ 'active': isCardActive }">
        <h1 :style="{ textAlign: 'center', color: 'brown' }">Register</h1>
        <form @submit.prevent="handleRegister">
          <label for="firstName">First Name:</label>
          <input type="text" name="firstName" v-model="firstName" />

          <label for="lastName">Last Name:</label>
          <input type="text" name="lastName" v-model="lastName" />

          <label for="email">Email:</label>
          <input type="email" name="email" v-model="email" />

          <label for="password">Password:</label>
          <input type="password" name="password" v-model="password" />

          <button
            :style="{ backgroundColor: 'brown', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }">
            Register
          </button>
        </form>
      </div>
      <div class="watermark">
        @powered-by Maleeha Malik
      </div>
    </div>
  </div>
</template>

<script>

import { authService } from "../src/services/login.services";

export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      isCardActive: false,
    };
  },
  methods: {
    handleRegister() {
      this.error = ""
      const { firstName, lastName, email, password } = this
      if (!(firstName && lastName && email && password)) {
        return;
      }

      authService.register(this.firstName, this.lastName, this.email, this.password)
        .then((res) => {
          this.$router.push("/");
        })
        .catch((error) => (this.error = error));
    },
  },
};
</script>

<style>
body {
  margin: 0;
  /* Remove default body margin */
  overflow: hidden;
  /* Remove scroll from the window */
}

.header {
  background-color: brown;
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.register-button {
  background-color: #f7dfaf;
  color: #000000;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.register-button:hover {
  background-color: #0056b3;
}

.header h1 {
  color: #ffffff;
  /* Text color for the header text */
  font-size: 32px;
  margin: 0;
}

.watermark {
  position: absolute;
  bottom: 20px;
  right: 20px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.3);
  /* You can add more styles to customize the watermark appearance */
}

.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7dfaf;
  /* Different background color */
}

.card {
  padding: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  /* White background for the card */
  border-radius: 5px;
  width: 370px;
  /* Increased card width */
  height: 420px;
  /* Increased card height */
  transition: all 0.3s ease;
  /* Smooth transition on hover */
}

.card.active {
  transform: scale(1.05);
  /* Slightly larger when active */
}

h1 {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 10px;
}

input:focus {
  border-color: #007bff;
  /* Border color when input is focused */
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

/* Additional styles can be added based on your design requirements */
</style>