<template>
  <div class="user-page">
    <div class="user-page__header">
      <div class="user-page__header__description">
        <h1>Работники</h1>
        <p class="description">На этой стрице можно добавлять работников</p>
      </div>
      <div class="user-page__header__actions">
        <DashboardButton colored>
          <template v-slot:icon>
            <svg style="display: block; margin: auto; height: 100%;" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 11.1429H11.1429V18H8.85714V11.1429H2V8.85714H8.85714V2H11.1429V8.85714H18V11.1429Z" fill="white"/>
            </svg>
          </template>
          <span>Добавить нового пользователя</span>
        </DashboardButton>
      </div>
    </div>
    <div class="exist-users">
      <div class="exist-user__item">
        <UserCard post="Директор" user-name="Сурков Иван"></UserCard>
      </div>
    </div>
  </div>
</template>

<script>
import DashboardButton from "../components/DashboardButton";
import UserCard from "../components/UserCard";
export default {
name: "Users",
  components: {UserCard, DashboardButton}
}
</script>

<style scoped>
h1{
  margin: 0;
}
.description{
  color: #A6ACBE;
}
.exist-users{
  margin-top: 2em;
  display: flex;
  flex-wrap: wrap;
  gap: 2%
}
.exist-user__item{
  box-sizing: border-box;
  flex-basis: 32%;
  height: 6em;
  margin-bottom: 2%;
}
.exist-users__item__add{
  cursor: pointer;
  display: flex;
}
.user-page__header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>