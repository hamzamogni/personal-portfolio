<template>
  <v-card :to="`/blog/` + article.slug" flat class="pa-5">
    <p class="text-h5 font-weight-black mb-0">
      {{ article.title }}
    </p>
    <span class="text-subtitle-2 font-weight-medium ml-3">
      {{ formatDate(article.createdAt) }} - 20 min read
    </span>
    <div class="my-5 text-h6 font-weight-medium">
      {{ article.description }}...
    </div>
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
