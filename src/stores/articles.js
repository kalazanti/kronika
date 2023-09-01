import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useArticlesStore = defineStore('articles', () => {
  const articles = ref([])

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

  return { articles, length, add, get }
})


