<template>
  <div class="user-page">
    <page-description page-description="На этой стрице можно добавлять работников" page-name="Работники">
      <template v-slot:actions>
        <DashboardButton colored>
          <template v-slot:icon>
            <svg style="display: block; margin: auto; height: 100%;" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 11.1429H11.1429V18H8.85714V11.1429H2V8.85714H8.85714V2H11.1429V8.85714H18V11.1429Z" fill="white"/>
            </svg>
          </template>
          <span>Добавить нового пользователя</span>
        </DashboardButton>
      </template>
    </page-description>
    <div class="exist-users">
      <div class="exist-user__item">
        <UserCard post="Директор" user-name="Сурков Иван"></UserCard>
      </div>
    </div>
  </div>
</template>

<script>
import UserCard from "../components/UserCard";
import PageDescription from "../components/PageDescription";
import DashboardButton from "../components/DashboardButton";
export default {
name: "Users",
  components: {DashboardButton, PageDescription, UserCard}
}
</script>

<style scoped>
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
</style>