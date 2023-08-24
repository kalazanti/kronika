<template>
    <main v-if="article">
        <ArticleMetadata :article="article"></ArticleMetadata>
        <article v-html="article.rich_content">
        </article>
    </main>
    <main v-else>
        <h1>404-es hiba</h1>
        <p>A megadott elérési útvonalon nem található cikk. <br>
            <RouterLink to='/'>Vissza a kezdőlapra!</RouterLink>
        </p>
    </main>
</template>
<script setup>
import ArticleMetadata from './ArticleMetadata.vue';
const props = defineProps(["article"]);
</script>
