<template>
  <div class="modal_blur" @click.self="close()" v-if="modelValue">
      <div class="modal__window">
        <slot v-bind:close="close"></slot>
      </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  emits: ['update:modelValue'],
  methods: {
    close(){
      this.$emit('update:modelValue', false);
    }
  },
  props: ['modelValue']
}
</script>
<style scoped>
.modal_blur{
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #75757555;
  justify-content: center;
  align-items: center;
}
.modal__window{
  min-width: 15vw;
  max-height: 50vh;
  min-height: 20vh;
  background-color: white;
  z-index: 100;
  position: fixed;
  border-radius: 10px;
  box-shadow: 0 5px 0 #EDEDF6;
  box-sizing: border-box;
}
</style>