<template>
  <nuxt-content class="mt-5 text-h6" :document="article"></nuxt-content>
</template>

<script>
export default {
  layout: "blog-index",
  async asyncData({ $content, params }) {
    const article = await $content("/", "contact").fetch();
    console.log(article);

    return { article };
  },
};
</script>
<style></style>
