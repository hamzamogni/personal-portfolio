<template>
    <span>
        <p id="title" class="mb-0 mt-10">{{ article.title }}</p>
        <span class="text-subtitle-2 font-weight-medium text--secondary">
            {{ formatDate(article.createdAt) }}
        </span>
        <v-img eager :src="require(`@/assets/images/${article.img}`)" class="elevation-1 mt-4"></v-img>
        <ArticleTags :tags="article.tags" class="mt-5" />
        <nuxt-content class="mt-10 text-h6" :document="article" tag="article"></nuxt-content>
    </span>
</template>

<script>
export default {
    layout: 'blog-index',
    async asyncData({ $content, params, $seoMeta }) {
        const article = await $content('articles', params.slug).fetch()

        $seoMeta({
            title: article.title,
            description: article.description,
            image: `https://hmogni.me/images/${article.img}`,
            twitterUser: '@hamza_mogni',
            url: `https://hmogni.me/blog/${article.slug}`,
            keywords: article.keywords.join(', '),
        })

        return { article }
    },

    head() {
        return {
            title: this.article.title,
        }
    },

    methods: {
        formatDate(date) {
            const options = {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            }
            return new Date(date).toLocaleDateString('en', options)
        },
    },
}
</script>
<style>
h1,
h2,
h3,
h4,
h5,
h6 {
    margin-bottom: 15px;
    margin-top: 20px;
}

#title {
    font-size: 2rem;
    font-weight: 900;
}

pre > code {
    background-color: transparent !important;
}
</style>
