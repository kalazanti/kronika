<template>
  <main class="two columns" v-if="length > 0">
    <ArticleBox v-for="article in articles" :article="article" />
  </main>
</template>

<script setup>
import PocketBase from "pocketbase";
import ArticleBox from "../components/ArticleBox.vue";
import { useArticlesStore } from "@/stores/articles.js";
import { storeToRefs } from "pinia";
import { StoreStates } from "../util/storestates";

const articlesStore = useArticlesStore();
const pb = new PocketBase("https://kalazanti.fly.dev");

pb.collection("kronika")
  .getFullList({
    sort: "-created",
    filter: "published = true",
  })
  .then((records) => records.forEach((record) => {
    articlesStore.add(record)
    console.log(record)
    console.log(articlesStore.length)
  }))
  .then(() => {
    articlesStore.state = StoreStates.ALL_ARTICLES_LOADED
  });

const { articles, length } = storeToRefs(articlesStore)
defineExpose({ articles, length });
</script>
