<template>
  <main class="two columns" v-if="length > 0">
    <ArticleBox v-for="article in articles" :article="article" />
  </main>
</template>

<script setup>
import ArticleBox from "../components/ArticleBox.vue";
import { useArticlesStore } from "@/stores/articles.js";
import { storeToRefs } from "pinia";

const articlesStore = useArticlesStore();
const { articles, length } = storeToRefs(articlesStore)

defineExpose({ articles, length });
</script>
