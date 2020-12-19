<template>
<!--  <main class="main">-->
    <router-view />
<!--  </main>-->
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
.main{
  min-height: 99.99vh;
}
html, body{
  margin: 0;
  padding: 0;
  height: 100%;
}
* . * {
  box-sizing: border-box;
}
#app{
  box-sizing: border-box;
}
</style>
