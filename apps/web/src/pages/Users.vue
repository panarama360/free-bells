<template>
  <div class="user-page">
    <page-description page-description="На этой стрице можно добавлять работников" page-name="Работники">
      <template v-slot:actions>
        <DashboardButton @click="addUser = {}" colored>
          <template v-slot:icon>
            <i class="fas fa-plus"></i>
          </template>
          <span>Добавить</span>
        </DashboardButton>
      </template>
    </page-description>
    <div class="exist-users">
      <div class="exist-user__item">
        <UserCard post="Директор" user-name="Сурков Иван"></UserCard>
      </div>
    </div>
    <Modal v-model="addUser">
      <div class="modal">
        <TextField placeholder="Имя" v-model="addUser.name"></TextField>
        <TextField placeholder="Должность" v-model="addUser.post"></TextField>
        <DashboardButton colored @click="test">Сохранить</DashboardButton>
      </div>
    </Modal>
  </div>
</template>

<script>
import UserCard from "../components/UserCard";
import PageDescription from "../components/PageDescription";
import DashboardButton from "../components/DashboardButton";
import Modal from "../components/Modal";
import TextField from "../components/TextField";

export default {
  name: "Users",
  components: {TextField, Modal, DashboardButton, PageDescription, UserCard},
  methods: {
    test() {
      alert(JSON.stringify(this.addUser));
      this.addUser = undefined;
    }
  },
  data() {
    return {
      addUser: undefined
    }
  }
}
</script>

<style scoped>
.modal {
  display: flex;
  flex-direction: column;
  margin: 1em;
  gap: 1em;
}

.exist-users {
  margin-top: 2em;
  display: flex;
  flex-wrap: wrap;
  gap: 2%
}

.exist-user__item {
  box-sizing: border-box;
  flex-basis: 32%;
  height: 6em;
  margin-bottom: 2%;
}

.exist-users__item__add {
  cursor: pointer;
  display: flex;
}
</style>