<template>
  <div class="user-page__header">
    <div class="user-page__header_description">
      <h1>{{ pageName }}</h1>
      <p class="description">{{ pageDescription }}</p>
    </div>
    <div class="user-page__header__actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageDescription",
  props: [
      'pageName',
      'pageDescription'
  ]
}
</script>

<style scoped>
.user-page__header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.description{
  color: #A6ACBE;
}
h1{
  margin: 0;
}
@media (max-width: 767px) {
  .user-page__header{
    flex-direction: column;
    padding-bottom: 1em;
  }
}
/*.user-page__header__actions{*/
/*  display: flex;*/
/*}*/
</style>