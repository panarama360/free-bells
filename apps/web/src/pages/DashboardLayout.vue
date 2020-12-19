<template>
  <div>

    <div class="container">
      <nav class="navigation">
        <img class="logo" src="../assets/bell.png"/>
        <SideMenu/>
      </nav>
      <header class="header">
      </header>
      <main class="main">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import SideMenu from "../components/SideMenu";
export default {
name: "DashboardLayout",
  components: {SideMenu}
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
}
.main{
  padding-left: 10em;
  padding-top: 10em;
  padding-right: 3em;
  background-color: #F8F8FB;
}
.navigation{
  position: fixed;
  height: 100%;
  width: 100px;
  background-color: #373B53;
  box-sizing: border-box;
}
.logo{
  /*background-image: url("../assets/bell.png");*/
  width: 100px;
  height: 100px;
  background-color: #6F52ED;
}
.header{
  position: fixed;
  width: 100%;
  height: 100px;
  margin-left: 100px;
  background-color: white;
  box-sizing: border-box;
}
</style>