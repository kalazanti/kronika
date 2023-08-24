import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useArticlesStore = defineStore('articles', () => {
  const articles = ref([])

  function add(article){
    const index = articles.value.findIndex(record => record.link === article.link)
    console.log(`index of ${article.link} is ${index}`)
    if(index === -1) {
      articles.value.push(article)
      return
    }
  }

  function get(link) {
    return articles.value.find(record => record.link === link) || {}
  }

  const length = computed(() => articles.value.length)

  return { articles, length, add, get }
})


