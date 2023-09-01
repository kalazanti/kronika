import { ref, computed, watch } from "vue";
import { defineStore } from "pinia";
import PocketBase from "pocketbase";

export const useAuthStore = defineStore("auth", () => {
  const pb = new PocketBase("https://kalazanti.fly.dev");
  const authData = ref(undefined);

  async function login(user, pass) {
    try {
      authData.value = await pb
        .collection("users")
        .authWithPassword(user, pass)
        .then(r => r.record);
    } catch (e) {
      console.error(e, e.stack);
      return false;
    }
    return true;
  }

  function logout() {
    pb.authStore.clear();
    authData.value = {};
  }

  watch(authData, (value) => {
    if(value === undefined) {
      console.log("Auth store lost, clearing pb.authStore...")
      pb.authStore.clear()
    }
  })

  const isAuthenticated = computed(() => authData.value !== undefined && pb.authStore.isValid)

  return { login, logout, authData, isAuthenticated };
});
