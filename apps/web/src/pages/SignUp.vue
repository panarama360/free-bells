<template>
  <div class="sign-up">
    <div class="sign-up-form">
      <div class="left-form">
        <span class="login-text m-1">Login In</span>
        <TextField class="m-1" v-model="email" placeholder="Email"/>
        <TextField class="m-1" v-model="password" placeholder="Пароль" type="password"/>
        <a href="#" class="forgot-password">Забыли пароль?</a>
        <Button class="m-1" text="LOG IN"/>
      </div>
      <div class="right-form">
        <h1 class="page-title">Free Bell</h1>
        <h1 class="page-title">Login Page</h1>
        <router-link to="/registration" class="registration">Зарегистрироваться</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button";
import TextField from "../components/TextField";

export default {
  name: "SignUp",
  components: {TextField, Button},
  data(){
    return {
      email: '',
      password: '',
    }
  }
}
</script>

<style scoped>
.registration {
  font-size: 2em;
  color: white;
}

.forgot-password {
  margin-left: auto;
  margin-right: 1em;
}

.page-title {
  font-family: sans-serif;
  font-weight: bold;
  margin: 0;
  color: white;
}

.login-text {
  font-family: sans-serif;
  font-size: 2em;
  font-weight: bold;
}

.right-form {
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(90deg, rgba(240, 73, 80, 1) 0%, rgba(253, 63, 107, 1) 100%);
}

.left-form {
  flex-basis: 50%;
  box-sizing: border-box;
  padding: 1em;
  height: 100%;
  align-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.m-1 {
  margin: 1em;
}

.sign-up {
  padding-top: 12vh;
  box-sizing: border-box;
  min-height: 99.99vh;
  background-color: #f3e1e3;
}

.sign-up-form {
  text-align: center;
  display: flex;
  flex-flow: row;
  max-width: 55%;
  min-height: 67vh;
  margin: 0 auto;
  background: white;
  overflow: hidden;
  border-radius: 15px;
}
</style>
