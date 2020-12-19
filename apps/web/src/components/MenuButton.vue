<template>
  <router-link v-slot="{ isExactActive }">
    <div class="menu-button__button" :class="{'menu-button__button_active': isExactActive}">
      <slot></slot>
    </div>
  </router-link>
</template>

<script>
export default {
name: "MenuButton",
  props: ['active']
}
</script>

<style scoped>
.menu-button__button{
  width: 54px;
  height: 54px;
  border-radius: 10px;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
}
.menu-button__button_active{
  background-color: #FFFFFF;
}
</style>