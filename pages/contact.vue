<template>
  <div>
    <nuxt-content class="mt-5 text-h6" :document="article"></nuxt-content>

    <v-row class="mt-10" justify="center">
      <v-col
        v-for="(social, idx) in social_media"
        :key="idx"
        cols="4"
        align-self="center"
      >
        <v-card
          :href="social.url"
          target="_blank"
          tag="a"
          outlined
          hover
          rounded="lg"
        >
          <v-card-text>
            <v-btn icon :href="social.url" target="_blank">
              <v-icon x-large color="primary">{{ social.icon }}</v-icon>
            </v-btn>
            <span class="text-h6 ml-5">
              {{ social.name }}
            </span>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { getSocialLinks } from "~/services/social-links";
export default {
  layout: "blog-index",
  async asyncData({ $content, params }) {
    const article = await $content("/", "contact").fetch();
    console.log(article);

    return { article };
  },

  data() {
    return {
      social_media: getSocialLinks(),
    };
  },
};
</script>
<style></style>
