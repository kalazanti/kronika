<template>
  <header>
    <nav class="three columns" style="align-items: baseline">
      <RouterLink to="/" class="primary card">
        <strong>Krónika</strong>
      </RouterLink>
      <div to="/rovatok" class="gray card" title="Hamarosan..." style="cursor:not-allowed">
        <strong>Rovatok</strong>
      </div>
      <a href="https://kalazanti.github.io" class="accent card">
        <strong>Csapathonlap</strong>
      </a>
      <div class="card" v-if="isAuthenticated">
        Jó munkát, {{ authData.username }}
      </div>
      <RouterLink to="/edit" class="accent card" v-if="isAuthenticated">
        <strong>Szerkesztő</strong>
      </RouterLink>
      <a href="#" class="gray card" v-if="isAuthenticated" @click="logout">
        <strong>Kilépés</strong>
      </a>
    </nav>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useAuthStore } from "./stores/auth";
import { storeToRefs } from "pinia";

const authStore = useAuthStore()
function logout() {
  authStore.logout();
}
const { isAuthenticated, authData } = storeToRefs(authStore)
</script>
