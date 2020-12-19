<template>
  <div class="buttons-page">
    <page-description page-description="Тут можно настроить кноки на стринице которые видят клиенты" page-name="Кнопки">
      <template v-slot:actions>
        <DashboardButton colored>
          <template v-slot:icon>
            <i class="fas fa-plus"></i>
          </template>
          <span>Добавить</span>
        </DashboardButton>
      </template>
    </page-description>
    <div class="card-buttons-list">
      <CardButton class="card-buttons-list__item"
                  :icon="'fa-window-close'"
                  text="Описание кнопки">
      </CardButton>
    </div>
  </div>
</template>

<script>
import PageDescription from "../components/PageDescription";
import CardButton from "../components/CardButton";
import DashboardButton from "../components/DashboardButton";
export default {
  name: "Buttons",
  data(){
    return {
      show: true
    }
  },
  components: {
    DashboardButton,
    CardButton,
    PageDescription,
  }
}
</script>

<style scoped>
.card-buttons-list{
  display: flex;
  flex-wrap: wrap;
}
.card-buttons-list__item{
}
</style>