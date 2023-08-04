<template>
    <form @submit.prevent="handleSubmit">
      <label>Name:</label>
      <input
        type="text"
        placeholder="Enter name here"
        required
        v-model="name"
      />
      <div v-if="nameError" class="error">{{ nameError }}</div>
  
      <label>Email:</label>
      <input
        type="email"
        placeholder="Enter email here"
        required
        v-model="email"
      />
  
      <label>Password:</label>
      <input
        type="password"
        placeholder="Enter password here"
        required
        v-model="password"
      />
      <div v-if="passwordError" class="error">{{ passwordError }}</div>
  
      <label>Confirm Password:</label>
      <input
        type="password"
        placeholder="Enter again password"
        required
        v-model="confirmPassword"
      />
      <div v-if="passwordMatchError" class="error">{{ passwordMatchError }}</div>
  
      <div class="submit">
        <button type="submit">Create an Account</button>
      </div>
    </form>
  </template>
  
  <script>
  export default {
    name: 'signup',
    data() {
      return {
        name: "",
        nameError:"",
        email: "",
        password: "",
        passwordError: "",
        confirmPassword: "",
        passwordMatchError: "",
      };
    },
    methods: {
      handleSubmit() {
        // Validate username
        if (/\s/.test(this.name)) {
          this.nameError = "Username should not contain spaces.";
          return;
        } else {
          this.nameError = "";
        }
  
        if (!/[0-9!@#$%^&*(),.?":{}|<>]/.test(this.name)) {
          this.nameError = "Username must include a number or special character.";
          return;
        } else {
          this.nameError = "";
        }
  
        // Validate password
        const passwordRegex = /^(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if (!passwordRegex.test(this.password)) {
          this.passwordError =
            "Password must start with a capital letter, include a special character, and be at least 8 characters long.";
          return;
        } else {
          this.passwordError = "";
        }
  
        // Confirm password match
        if (this.password !== this.confirmPassword) {
          this.passwordMatchError = "Passwords do not match.";
          return;
        } else {
          this.passwordMatchError = "";
        }
  
        // Save email and password in local storage
        localStorage.setItem("email", this.email);
        localStorage.setItem("password", this.password);
  
        // If all validations pass, you can proceed with form submission or other actions
        alert("Signup successful!");
      },
      
      created() {
      // Retrieve email from local storage when the component is created
      const storedEmail = localStorage.getItem("email");
      if (storedEmail) {
        this.email = storedEmail;
      }
      const storedPassword = localStorage.getItem("password");
      if (storedPassword) {
        this.password = storedPassword;
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
  .submit {
    text-align: center;
    margin: 25px 0 15px;
    margin-left: 100px;
  }
  .error {
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }
  </style>
  