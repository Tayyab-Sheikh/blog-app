<template>
  <div>
    <div :style="{
      backgroundColor: 'brown',
      padding: '20px',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }">
      <h1 :style="{
        color: 'white',
        fontSize: '32px',
        margin: '0',
      }">
        My Blog App
      </h1>
      <button class="register-button" :style="{
        backgroundColor: '#f7dfaf',
        color: '#000000',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '4px',
        cursor: 'pointer',
      }" @click="goToRegister">
        Register
      </button>
    </div>
    <div class="login-container" :style="{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#f7dfaf',
    }">
      <div class="card" :style="{
        padding: '30px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ffffff',
        borderRadius: '5px',
        width: '350px',
        height: '290px',
        transition: 'all 0.3s ease',
        transform: isCardActive ? 'scale(1.05)' : 'none',
      }">
        <h1 :style="{ textAlign: 'center', color: 'brown' }">Login</h1>
        <form @submit.prevent="handleSubmit">
          <label :style="{ fontWeight: 'bold', marginBottom: '5px' }" for="email">Email:</label>
          <input type="email" name="email" v-model="email" @focus="isCardActive = true" @blur="isCardActive = false"
            :style="{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px', marginBottom: '10px', borderColor: emailFocused ? '#007bff' : '#ccc' }" />
          <div v-show="submitted && !email" :style="{ color: 'red', marginTop: '10px' }">Email is required</div>

          <label :style="{ fontWeight: 'bold', marginBottom: '5px' }" for="password">Password:</label>
          <input type="password" name="password" v-model="password" @focus="isCardActive = true"
            @blur="isCardActive = false"
            :style="{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '3px', marginBottom: '10px', borderColor: passwordFocused ? '#007bff' : '#ccc' }" />
          <div v-show="submitted && !password" :style="{ color: 'red', marginTop: '10px' }">Password is required</div>

          <button
            :style="{ backgroundColor: 'brown', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }">
            Login
          </button>
          <div v-if="error" :style="{ color: 'red', marginTop: '10px' }" class="error">{{ error }}</div>
        </form>
      </div>
      <div class="watermark"
        :style="{ position: 'absolute', bottom: '20px', right: '20px', fontSize: '14px', color: 'rgba(0, 0, 0, 0.3)' }">
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
      email: "",
      password: "",
      submitted: false,
      error: "",
      isCardActive: false,
      emailFocused: false,
      passwordFocused: false,
    };
  },
  methods: {
    handleSubmit() {
      authService
        .login(this.email, this.password)
        .then((res) => {
          console.log(res.session_token.session_token, `res`)
          localStorage.setItem("session_token", res.session_token.session_token);
          submitted: true,
            this.$router.push("/articles");
        })
        .catch((error) => (this.error = error));
    },
    goToRegister() {
      this.$router.push("/register");
    },
  },
};
</script>