<template>
  <img alt="Vue logo" src="./assets/logo.png" class="mx-auto my-0" />
  <h1 class="text-4xl mt-4">Cypress Tailwind Demo</h1>
  <Modal :show="show" @close="show = false">lorem ipsum dolor sit amet, consectetur adipiscing elit.</Modal>
  <button
    class="my-10 py-1 px-3 text-xl focus:ring-1 rounded focus:ring-green-600 underline text-green-600"
    @click="show = !show"
  >Toggle Modal</button>
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Modal from './Modal.vue'
import { ref } from 'vue'

const show = ref(false)
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
