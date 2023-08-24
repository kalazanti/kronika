<template>
    <h1>This is an article</h1>
    <h2>Now showing: {{ $route.params.link }}</h2>
    <h2>Title for this link: {{ articlesStore.get($route.params.link)?.title }}</h2>
    <h3>articles length: {{ articlesStore.length }}</h3>
    <!-- <textarea>{{ JSON.stringify(article, space = 2) }}</textarea> -->
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useArticlesStore } from "@/stores/articles.js";

const articlesStore = useArticlesStore()

defineExpose({articlesStore})
</script>

