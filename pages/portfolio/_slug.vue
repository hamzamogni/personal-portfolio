<template>
    <span>
        <p id="title" class="mb-0 mt-10">{{ project.title }}</p>
        <v-img :src="require(`~/assets/images/${project.img}`)" max-height="300px" class="mt-4 rounded-lg"></v-img>
        <ArticleTags :tags="project.tags" class="mt-5 px-4" />
        <nuxt-content class="mt-10 text-h6 px-4" :document="project" tag="article"></nuxt-content>
    </span>
</template>

<script>
export default {
    layout: 'blog-index',

    async asyncData({ $content, params }) {
        const project = await $content('portfolio', params.slug).fetch()
        return { project }
    },
}
</script>

<style>
#title {
    font-size: 2rem;
    font-weight: 900;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    margin-bottom: 15px;
    margin-top: 20px;
}
</style>
