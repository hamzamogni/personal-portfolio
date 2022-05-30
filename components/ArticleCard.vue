<template>
  <v-card
    :to="`/blog/` + article.slug"
    flat
    outlined
    rounded="lg"
    class="px-5 py-4"
  >
    <p class="text-h5 font-weight-black mb-0">
      {{ article.title }}
    </p>
    <span class="text-subtitle-2 font-weight-medium text--secondary ml-3">
      {{ formatDate(article.createdAt) }} - 20 min read
    </span>
    <div class="mt-5 text-subtitle-1 font-weight-medium">
      {{ article.description }}...
    </div>

    <v-card-actions>
      <ArticleTags :tags="article.tags" />
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "ArticleCard",
  props: {
    article: {
      type: Object,
      required: true,
    },
  },

  methods: {
    formatDate(date) {
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      return new Date(date).toLocaleDateString("en", options);
    },
  },
};
</script>

<style scoped></style>
