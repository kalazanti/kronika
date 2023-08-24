<template>
  <header>
    <h1>This is the main App component</h1>
    <nav class="three columns" style="align-items: baseline">
      <RouterLink to="/" class="primary card">
        <strong>Krónika</strong>
      </RouterLink>
      <RouterLink to="/rovatok" class="primary card">
        <strong>Rovatok</strong>
      </RouterLink>
      <a href="https://kalazanti.github.com" class="accent card">
        <strong>Aktuális</strong>
      </a>
    </nav>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useArticlesStore } from "@/stores/articles.js";

// import HelloWorld from "./components/HelloWorld.vue";
import PocketBase from "pocketbase";

const pb = new PocketBase("https://kalazanti.fly.dev");
const articlesStore = useArticlesStore();

pb.collection("kronika")
  .getFullList({
    sort: "-created",
    filter: "published = true",
  })
  .then((records) => records.forEach((record) => {
    articlesStore.add(record)
    console.log(record)
    console.log(articlesStore.length)
    }));
</script>
