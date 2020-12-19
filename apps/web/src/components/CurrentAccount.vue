<template>
  <div class="current-account">
    <span class="current-account__current-user">{{user}}</span>
    <span class="current-account__organisation">{{organisation}}</span>
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
export default {
  name: "CurrentAccount",
  props: [
      'organisation',
      'user'
  ]
}
</script>

<style scoped>
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
  border-right: 1px #d7d7d7 solid;
  padding-right: 1em;
  font-size: .9rem;
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