<template>
    <form @submit.prevent="handleLogin">
      <label>Email: </label>
      <input
        type="text"
        placeholder="Enter email here"
        required
        v-model="email"
      />
  
      <label>Password: </label>
      <input
        type="password"
        placeholder="Enter password here"
        required
        v-model="password"
      />
      <div v-if="error" class="error">{{ error }}</div>
      <div v-if="successfull" class="successfull">{{ successfull }}</div>
      <br />
      <br />
  
      <div class="login">
        <v-btn class="btn1" type="submit">Login</v-btn>
        <router-link to="/signup">
          <v-btn class="btn2">Sign Up</v-btn>
        </router-link>
      </div>
    </form>
  </template>
  
  <script>
  export default {
    name: 'login',
    data() {
      return {
        email: "",
        password: "",
        error: "",
        successfull: ""
      };
    },
    methods: {
      handleLogin() {
        // Retrieve stored email and password from local storage
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");
  
        // Check if the entered email and password match the stored values
        if (this.email === storedEmail && this.password === storedPassword) {
          router.push("/todo");
        } else {
          this.error = "Invalid email or password. Please try again.";
        }
      },
    },
  };
  </script>
  
  
  <style scoped>
  form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  button {
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
  }
  .login {
    text-align: center;
  }
  
  .btn1 {
    margin-right: 50px;
  }
  .btn2 {
    margin-left: 50px;
  }
  
  .error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }
  
  
  </style>
  