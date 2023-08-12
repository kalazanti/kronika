import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useArticlesStore = defineStore('articles', () => {
  const list = ref([])
  function getById(id) {
    list.find(article => article.id === id)
  }

  return { count, list, getById }
})


