import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { StoreStates } from "../util/storestates";

export const useArticlesStore = defineStore('articles', () => {
  const articles = ref([])
  const state = ref(StoreStates.EMPTY)

  function add(article){
    const index = articles.value.findIndex(record => record.link === article.link)
    if(index === -1) {
      articles.value.push(article)
    }
  }

  function get(link) {
    return articles.value.find(record => record.link === link) || null
  }

  const length = computed(() => articles.value.length)
  const loaded = computed(() => state.value !== StoreStates.EMPTY)

  return { articles, length, state, loaded, add, get }
})


