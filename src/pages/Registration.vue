<template>
  <div class="registration">
    <div class="registration-form">
      <div class="left-form">
        <h1 class="page-title">Free Bell</h1>
        <h1 class="page-title">Registration Page</h1>
        <router-link to="/" class="login-text">Войти</router-link>
      </div>
      <div class="right-form">
        <span class="registration-text m-1">Registration</span>
        <TextField class="m-1" v-model="name" placeholder="Имя"/>
        <TextField class="m-1" v-model="email" placeholder="Email" type="text"/>
        <TextField class="m-1" v-model="password" placeholder="Пароль" type="password"/>
        <TextField class="m-1" v-model="passwordRepeat" placeholder="Повторить пароль" type="password"/>
        <Button class="m-1" @click="registration" text="Registration"/>
      </div>
    </div>
  </div>
</template>

<script>
import TextField from "../components/TextField";
import Button from "../components/Button";
import appFirebase from "@/firebase";
import firebase from "firebase";

export default {
  name: "Registration",
  components: {TextField, Button},
  data(){
    return {
      name: '',
      email: '',
      password: '',
      passwordRepeat: '',
    }
  },
  methods: {
    async registration() {
      try {
        await appFirebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        const auth = await appFirebase.auth().createUserWithEmailAndPassword(this.email, this.password);
        await auth.user.updateProfile({
          displayName: this.name
        });
        await this.$router.push('/dashboard');
      } catch (e) {
        console.log(e);
      }
    }
  }
}
</script>

<style scoped>
.registration-text{
  font-family: sans-serif;
  font-size: 2em;
  font-weight: bold;
}
h1{
  margin: 0;
}
.m-1 {
  margin: 1em;
}
.login-text{
  font-size: 2em;
  color: white;
}
.left-form{
  color: white;
  flex-basis: 50%;
  background: linear-gradient(90deg, rgba(240, 73, 80, 1) 0%, rgba(253, 63, 107, 1) 100%);

  display: flex;
  flex-direction: column;
  justify-content: center;
}
.right-form{
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.registration {
  padding-top: 12vh;
  box-sizing: border-box;
  min-height: 99.99vh;
  background-color: #f3e1e3;
}

.registration-form {
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