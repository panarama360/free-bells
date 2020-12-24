<template>
  <div class="text-field" v-bind:class="$attrs.class">
    <input v-bind="$attrs"
           :checked="modelValue"
           @input="$emit('update:modelValue', $event.target.value)"
           class="text-field__input"
           :class="{'text-field__input_error': error}">
    <p v-if="error" class="text-field__error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  props: [
      'error',
      'modelValue'
  ],
  inheritAttrs: false,
  name: "TextField"
}
</script>

<style scoped>
  .text-field{

  }
  .text-field__input{
    font-size: 20px;
    padding: 10px;
    border: none;
    border-radius: 3px;
    box-sizing: border-box;
    background-color: #efefef;
    width: 100%;
  }
  .text-field__error{
    margin: 0;
    color: #ff4d2c;
    text-align: right;
  }
  .text-field__input_error{
    border: 1px #ff4d2c solid;
  }
</style>
