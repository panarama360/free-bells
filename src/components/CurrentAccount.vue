<template>
  <div class="current-account">
    <span class="current-account__current-user">{{firebase.auth().currentUser.email}}</span>
    <div class="current-account__organisation">
      <span class="current-account__selected-organisation" v-if="currentOrganisation">{{currentOrganisation?.name}}</span>
      <span class="current-account__selected-organisation" v-else>Добавьте организацию</span>
      <div class="menu" v-if="currentOrganisation">
        <span  v-for="item in organisations" :key="item.id"  @click="selectOrganisation(item)" class="menu-item" >
           {{ item.name }}
        </span>
        <span class="menu-item menu-item_add" @click="$router.push('/dashboard/add-organisation')">
          Добавить Организацию
        </span>
      </div>
    </div>
    <button class="current-account__exit">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H9" stroke="#C9CED6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 17L21 12L16 7" stroke="#C9CED6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 12H9" stroke="#C9CED6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  name: "CurrentAccount",
  inject: [
      'firebase'
  ],
  methods: {
    selectOrganisation(org){
      this.$store.dispatch('organisation/selectOrganisation', org)
    }
  },
  computed: {
    ...mapState({
        currentOrganisation: (state) => state.organisation.currentOrganisation,
        organisations: (state) => state.organisation.organisations,
      }),
    }
}
</script>

<style scoped>
.menu-item_add{
  text-align: center;
}
.current-account__organisation:hover .menu{
  display: flex;
  opacity: 1;
  animation: fadein 1s;
}
@keyframes fadein {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.current-account{
  display: grid;
  /*width: 10em;*/
  grid-template-columns: auto 50px;
  grid-template-rows: auto;
  grid-template-areas:
    "user exit"
    "organisation exit"
}

.current-account__organisation{
  grid-area: organisation;
  font-family: 'Khula', sans-serif;
  text-align: right;
  align-self: start;
  color: #A6ACBE;
  justify-content: right;
  border-right: 1px #d7d7d7 solid;
  padding-right: 1em;
  font-size: .9rem;
  position: relative;
  cursor: pointer;
}

.menu{
  margin-right: 1em;
  margin-top: 1.5em;
  position: absolute;
  z-index: 1000;
  top: 0;
  right: 0;
  display: none;
  flex-direction: column;
  background: #d0d0d0;
  min-width: 10em;
  box-shadow: 10px 15px 10px #a5a5ab;
  border-radius: 5px;
  opacity: 0;
}

.menu-item{
  padding: .5em 1em .5em 1em;
  cursor: pointer;
  color: black;
  transition: 0.5s;
}
.menu .menu-item:not(:last-child){
  border-bottom: #bcbcbc 1px solid;
}
.menu-item:hover{
  padding-right: 1.2em;
  transition: 0.5s;
}
.current-account__current-user{
  grid-area: user;
  font-family: 'Khula', sans-serif;
  text-align: right;
  align-self: end;
  font-size: 1rem;
  font-weight: 800;
  border-right: 1px #d7d7d7 solid;
  padding-right: 1em;
}
.current-account__exit{
  grid-area: exit;
  border: 0;
  background-color: transparent;
  padding: 0;

  cursor: pointer;
}
</style>