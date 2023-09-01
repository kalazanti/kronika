<template>
  <main>
    <h1>AuthView</h1>
    <form @submit.prevent="logout" v-if="authStore.isAuthenticated">
      <button type="submit">Logout</button>
    </form>
    <form @submit.prevent="login" v-if="!authStore.isAuthenticated">
      <input type="text" autocomplete="username" required v-model="user">
      <input type="password" autocomplete="current-password" required v-model="pass">
      <button type="submit">Login</button>
    </form>
    <h2><code>authStore</code></h2>
    <div class="primary card" v-if="authStore.isAuthenticated">
      <p>Logged in: {{ authStore.authData.username }}</p>
    </div>
  </main>
</template>

<script setup>
import PocketBase from "pocketbase";
import ArticleBox from "../components/ArticleBox.vue";
import { useAuthStore } from "@/stores/auth.js";
import { storeToRefs } from "pinia";
import { StoreStates } from "../util/storestates";
import { ref } from "vue"

const user = ref("")
const pass = ref("")
const authStore = useAuthStore()

function login() {
  console.log(`${user.value} + ${pass.value}`)
  authStore.login(user.value, pass.value)
}

function logout() {
  authStore.logout()
}

</script>
