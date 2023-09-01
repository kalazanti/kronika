<template>
  <header>
    <nav class="three columns" style="align-items: baseline">
      <RouterLink to="/" class="primary card">
        <strong>Krónika</strong>
      </RouterLink>
      <div to="/rovatok" class="gray card" title="Hamarosan..." style="cursor:not-allowed">
        <strong>Rovatok</strong>
      </div>
      <a href="https://kalazanti.github.io" class="accent card">
        <strong>Csapathonlap</strong>
      </a>
    </nav>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
