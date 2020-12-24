<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <div class="load-placeholder" v-if="loadUser || loadOrganisation">
        {{loadUser}} {{!loadOrganisation}}
        <Loading></Loading>
      </div>
      <component :is="Component" v-else/>
    </transition>
  </router-view>
</template>

<script>


import {mapState} from "vuex";
import Loading from "@/components/Loading";

export default {
  name: 'App',
  components: {Loading},
  computed: {
    ...mapState({
      loadUser: (state) => state.user.loadUser,
      user: (state) => state.user.user,
      loadOrganisation: (state) => state.organisation.loadOrganisation
    }),
  },
  created() {
    this.$store.dispatch('created');
  },
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}

.load-placeholder{
  position: fixed;
  z-index: 100000;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
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
