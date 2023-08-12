<template>
    <article class="lightgray card">
        <a href="cikkek/#!/${link}">
            <strong class="headerify">{{article.title}}</strong>
        </a>
        <p>
            Írta: <strong>{{ article.author }}</strong>,
            <time datetime="{{ article.created }}">{{formatDateTime(article.created)}}</time></p>
        <div class="card">
            <p>{{article.lead.length ? article.lead : leadify(article.content)}}</p>
        </div>
    </article>
</template>
<script setup>
const props = defineProps(["article"]);

const dateTimeFormatter = new Intl.DateTimeFormat("hu-HU", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
});
const formatDateTime = date => dateTimeFormatter.format(new Date(date));

const markdownRegex = /(?<marks>[`]|\*{1,3}|_{1,3}|~{2})(?<inmarks>.*?)\1|\[(?<link_text>.*)\]\(.*\)/g;
const hashmarkRegex = /#{1,6} /g;

function leadify(text) {
    return text
        .replace(markdownRegex, '$<inmarks>$<link_text>')
        .replace(hashmarkRegex, "")
        .slice(0, 200) + "…";
}
</script>
