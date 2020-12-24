<template>
  <div>
    <page-description page-description="Тут можно создать органицазию" page-name="Добавление Организации">
      <template v-slot:actions>
        <DashboardButton @click="add" colored>
          <template v-slot:icon>
            <i class="fas fa-plus"></i>
          </template>
          <span>Добавить</span>
        </DashboardButton>
      </template>
    </page-description>
    <div class="add-organisation">
      <TextField v-model="name" placeholder="Название"></TextField>
      <TextField v-model="description" placeholder="Описание"></TextField>
    </div>
  </div>
</template>

<script>
import TextField from "@/components/TextField";
import PageDescription from "@/components/PageDescription";
import DashboardButton from "@/components/DashboardButton";
import appFirebase from "@/firebase";
export default {
  name: "AddOrganisation",
  components: {DashboardButton, PageDescription, TextField},

  methods: {
    async add(){
      await appFirebase
          .firestore()
          .collection('organisations')
          .doc()
          .set({
            name: this.name,
            description: this.description,
            ownerId: appFirebase.auth().currentUser.uid
          })
      this.$store.dispatch('updateOrganisation');
      this.$router.push('/dashboard')
    }
  },
  data(){
    return {
      name: '',
      description: ''
    }
  }
}
</script>

<style scoped>
.add-organisation{
  display: flex;
  flex-direction: column;
  max-width: 20em;
  gap: 1em;
}
</style>