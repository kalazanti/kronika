<template>
    <Article :article="articlesStore.get($route.params.link)"></Article>
</template>

<script setup>
import { useArticlesStore } from "@/stores/articles.js";
import Article from '../components/Article.vue';

const articlesStore = useArticlesStore()

defineExpose({ articlesStore })
</script>

