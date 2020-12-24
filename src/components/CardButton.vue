<template>
  <Card class="card-button"
        @mouseover="hover = true"
        @mouseleave="hover = false">
    <transition name="fade">
      <span class="delete fas fa-trash" v-if="hover"></span>
    </transition>
    <span class="icon-button fas" :class="icon"></span>
    <span class="text-button">{{ text }}</span>
  </Card>
</template>

<script>
import Card from "./Card";
export default {
name: "CardButton",
  components: {Card},
  props: [
      'icon',
      'text'
  ],
  data(){
    return {
      hover: false
    }
  }
}
</script>

<style scoped>
.icon-button{
  font-size: 8rem;
  color: #969CBA;
}
.card-button{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30vh;
  width: 30vh;
  position: relative;
  transition: .5s;
}
.card-button:hover{
  transition: .2s;
  box-shadow: 10px 10px 0.5em #b8b8de;
}

.text-button {
  font-size: 2rem;
}
.delete{
  position: absolute;
  top: 1em;
  right: 1em;
  color: #E57070;
  cursor: pointer;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>