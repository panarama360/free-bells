<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card"
}
</script>

<style scoped>
.card{
  background: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0 5px 0 #EDEDF6;
  height: 100%;
  box-sizing: border-box;
}
</style>