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
      <div class="exist-user__item" v-for="(user, index) in currentOrganisation.users" :key="index">
        <UserCard style="width: 100%" post="" :deleted="!currentOrganisation.owner" :email="index" :user-name="user"></UserCard>
      </div>
    </div>
    <Modal v-model="addUser">
      <div class="modal">
        <TextField placeholder="Должность" v-model="addUser.name"></TextField>
        <TextField placeholder="Email" type="email" v-model="addUser.email"></TextField>
        <span class="modal__error-text" v-if="addError">{{addError}}</span>
        <DashboardButton colored @click="save">Сохранить</DashboardButton>
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
import {mapState} from "vuex";
import appFirebase from "@/firebase";
import firebase from "firebase";
export default {
  name: "Users",
  components: {TextField, Modal, DashboardButton, PageDescription, UserCard},
  inject: ['firebase'],
  computed: {
    ...mapState({
      currentOrganisation: (state) => state.organisation.currentOrganisation,
      organisations: (state) => state.organisation.organisations,
    }),
  },
  methods: {
    deleteUser(){

    },
    async save(){
      // this.addError = undefined;
      // const users = await appFirebase.firestore()
      //     .collection('users')
      //     .where('email', '==', this.addUser.email).get()
      // if(users.empty)return this.addError = 'Пользователь не найден'
      // const user = users.docs[0];
      await appFirebase
          .firestore()
          .collection('organisations')
          .doc(this.currentOrganisation.id)
          .update(new firebase.firestore.FieldPath('users', this.addUser.email), this.addUser.name)
    }
  },
  data() {
    return {
      users: [],
      addError: undefined,
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
.modal__error-text{
  color: #db5b5b;
  text-align: center;
}
.exist-users {
  display: flex;
  flex-wrap: wrap;
  gap: 2%
}

.exist-user__item {
  box-sizing: border-box;
  display: flex;
  gap: 1em;
  flex: 1;
  height: 6em;
  margin-bottom: 2%;
  flex-basis: 30%;
  max-width: 30%;
  min-width: 30%;
}

.exist-users__item__add {
  cursor: pointer;
  display: flex;
}
</style>