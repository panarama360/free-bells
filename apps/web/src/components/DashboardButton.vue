<template>
  <button class="dashboard-button" :class="{'not-colored': !colored, 'colored': colored}">
    <div class="dashboard-button__content">
      <div v-if="!!$slots.icon"><slot name="icon"></slot></div>
      <div style="vertical-align: center"><slot></slot></div>
    </div>
  </button>
</template>

<script>
export default {
name: "DashboardButton",
  props: {
    colored: Boolean
  }
}
</script>

<style scoped>
.dashboard-button__content{
  display: flex;
  justify-content: center;
  align-items: center;
}
.dashboard-button{
  background-color: transparent;
  border: none;
  font-size: 1em;
  font-family: 'Khula', sans-serif;
  padding: 1em;
  cursor: pointer;
  border-radius: .3em;
  font-weight: 370;
}
.not-colored{
  color: #6F52ED;
  border: 1px solid #DADCE6;
}
.colored{
  background: #6F52ED;
  color: white;
}
</style>