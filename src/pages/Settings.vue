<template>
  <div>
    <page-description page-description="На этой стрице можно настроить систему уведоблений" page-name="Настройки">
      <template v-slot:actions>
        <DashboardButton colored>
          <span>Сохранить</span>
        </DashboardButton>
      </template>
    </page-description>
  </div>
</template>

<script>
import PageDescription from "../components/PageDescription";
import DashboardButton from "../components/DashboardButton";
export default {
name: "Settings",
  components: {DashboardButton, PageDescription}
}
</script>

<style scoped>

</style>