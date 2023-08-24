<template>
  <header>
    <nav class="three columns" style="align-items: baseline">
      <RouterLink to="/" class="primary card">
        <strong>Krónika</strong>
      </RouterLink>
      <div to="/rovatok" class="gray card" title="Hamarosan..." style="cursor:not-allowed">
        <strong>Rovatok</strong>
      </div>
      <a href="https://kalazanti.github.com" class="accent card">
        <strong>Csapathonlap</strong>
      </a>
    </nav>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useArticlesStore } from "@/stores/articles.js";

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
