<template>
  <div class="sign-up">
    <div class="sign-up-form">
      <Button text="LOG IN"></Button>
      <TextField placeholder="Email1"></TextField>
    </div>
  </div>
</template>

<script>
import Button from "../components/Button";
import TextField from "../components/TextField";
export default {
name: "SignUp",
  components: {TextField, Button}
}
</script>

<style scoped>
  .sign-up{
    /*height: 100%;*/
    /*display: flex;*/
    justify-content: center;
    align-items: center;
  }
  .sign-up-form{
    max-width: 700px;
    margin: 0 auto;
    background: white;
    padding: 10px;
    border-radius: 15px;
  }
</style>
