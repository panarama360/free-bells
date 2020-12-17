<template>
  <div>
    <header class="header">
      <div class="">
        <span class="logo">FreeBell</span>
      </div>
      <div class="user-information"></div>
    </header>
    <nav>

    </nav>
    <main>
      <router-view></router-view>
    </main>
    <footer>

    </footer>
  </div>
</template>

<script>
export default {
name: "DashboardLayout"
}
</script>

<style scoped>
.logo{
  font-size: 2em;
  font-weight: bold;
  font-family: Arial;
}
.header{
  display:flex;
  background-color: white;
  height: 2em;
  flex-direction: row;
  align-items: center;
  block-size: border-box;
  padding: 1em;
  justify-content: space-between;
}
</style>