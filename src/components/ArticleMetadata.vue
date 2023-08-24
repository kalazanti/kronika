<template>
    <section class="lightgray card">
        <h1>{{ article.title }}</h1>
        <aside class="three columns">
            <div>Írta: <strong> {{ article.author }}</strong></div>
            <div>Közzétéve: <time :datetime="article.created">{{ formatDateTime(article.created) }}</time></div>
            <div>Utolsó módosítás: <time :datetime="article.updated">{{ formatDateTime(article.created) }}</time></div>
        </aside>
    </section>
</template>

<script setup>
import { formatDateTime } from "@/util/datetimeformat.js"
const props = defineProps(["article"]);
</script>