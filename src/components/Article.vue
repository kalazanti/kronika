<template>
    <main>
        <ArticleMetadata :article="article"></ArticleMetadata>
        <article v-html="article.rich_content">
        </article>
    </main>
</template>
<script setup>
import ArticleMetadata from './ArticleMetadata.vue';
const props = defineProps(["article"]);
</script>
