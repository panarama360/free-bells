<template>
  <button class="button">{{text}}</button>
</template>

<script>
export default {
  props: [
      'text'
  ],
  name: "Button"
}
</script>

<style scoped>
  .button{
    background-color: #ff4d2c;
    border: none;
    border-radius: 50px;
    font-size: 20px;
    color: white;
    padding: .8em 3em;
  }
</style>
