<template>
  <div>
    <div class="container">
      <nav class="navigation">
        <img class="logo" src="../assets/bell.png"/>
        <SideMenu/>
      </nav>
      <header class="header">
        <CurrentAccount organisation="smoking" user="Сурков Иван"></CurrentAccount>
      </header>
      <main class="main">
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import SideMenu from "../components/SideMenu";
import CurrentAccount from "../components/CurrentAccount";
export default {
name: "DashboardLayout",
  components: {CurrentAccount, SideMenu}
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
  box-sizing: border-box;
}
.navigation{
  position: fixed;
  height: 100%;
  width: 100px;
  background-color: #373B53;
  box-sizing: border-box;
}
.logo{
  width: 100px;
  height: 100px;
  background-color: #6F52ED;
}
.header{
  position: fixed;
  display: flex;
  width: calc(100% - 100px);
  flex-direction: row-reverse;
  padding: 1em;
  justify-content: space-between;
  height: 100px;
  margin-left: 100px;
  background-color: white;
  box-sizing: border-box;
}
</style>