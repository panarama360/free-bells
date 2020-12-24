<template>
  <Card class="user-card">
    <span class="user-card__name">{{ userName }}</span>
    <span class="user-card__post">{{ post }} ({{ email }})</span>
    <button class="user-card__delete" v-if="!deleted" @click="onDelete" ></button>
  </Card>
</template>

<script>
import Card from "./Card";
export default {
name: "UserCard",
  components: {Card},
  props: {
    userName: String,
    post: String,
    email: String,
    deleted: Boolean,
    onDelete: Function
  }
}
</script>

<style scoped>
.user-card{
  padding: 1em;
  display: grid;
  grid-template-columns: auto 20%;
  grid-template-rows: auto;
  grid-template-areas:
    "name delete"
    "post delete"
}
.user-card__name{
  font-size: 2rem;
  display: block;
  grid-area: name;
}
.user-card__post{
  font-size: 1rem;
  display: block;
  color: #A6ACBE;
  grid-area: post;
}
.user-card__delete{
  font-size: 1rem;
  display: block;
  color: #A6ACBE;
  grid-area: delete;
  align-self: center;
  justify-self: center;
  width: 50px;
  height: 50px;
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  border: none;
  background-image: url("../assets/delete.svg");
}
.user-card__delete:hover{
  background-image: url("../assets/delete_hover.svg");
}
</style>