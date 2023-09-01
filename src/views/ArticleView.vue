<template>
    <Article v-if="articlesStore.loaded" :article="articlesStore.get($route.params.link)"></Article>
</template>

<script setup>
import { useArticlesStore } from "@/stores/articles.js";
import { useRoute } from 'vue-router'
import Article from '../components/Article.vue';
import PocketBase from "pocketbase";
import { StoreStates } from "../util/storestates";

const articlesStore = useArticlesStore()
const route = useRoute()

if (!articlesStore.loaded) {

    const pb = new PocketBase("https://kalazanti.fly.dev");
    
    pb.collection('kronika').getFirstListItem(`link="${route.params.link}"`)
    .then((record) => {
        articlesStore.add(record)
        console.log(record)
        console.log(articlesStore.length)
        articlesStore.state = StoreStates.ONE_ARTICLE_LOADED
    });
}
    
defineExpose({ articlesStore })
</script>

