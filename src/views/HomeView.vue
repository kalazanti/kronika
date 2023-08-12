<template>
  <main class="two columns">
    <ArticleBox v-for="article in articles" :article="article" />
  </main>
</template>

<script setup>
import ArticleBox from "../components/ArticleBox.vue";
import { useArticlesStore } from "@/stores/articles.js";
import { defineExpose } from "vue";
import { storeToRefs } from "pinia";
const articlesStore = useArticlesStore();

const { list: articles } = storeToRefs(articlesStore);

defineExpose({ articles });
</script>
