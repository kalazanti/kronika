<template>
  <header>
  <h1>This is the main App component</h1>
      <button @click="pushToArticles">Add dummy article</button>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { useArticlesStore } from "@/stores/articles.js";

// import HelloWorld from "./components/HelloWorld.vue";
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://kalazanti.fly.dev');
const articles = useArticlesStore();

pb.collection('kronika').getFullList({
    sort: '-created',
}).then(records => articles.list = records)

function pushToArticles(e){
  console.log(e)
  console.log("poop")
  articles.list.push({title: 'kaki'})
}
</script>
