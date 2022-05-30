<template>
  <v-row justify="center">
    <v-col
      v-for="(social, idx) in social_media"
      :key="idx"
      class="flex-grow-0 px-0"
    >
      <v-btn icon :href="social.url" target="_blank">
        <v-icon dense>{{ social.icon }}</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
import { getSocialLinks } from "~/services/social-links";
import { mdiEmail } from "@mdi/js";
export default {
  data() {
    return {
      social_media: [
        ...getSocialLinks(),
        { icon: mdiEmail, url: "mailto:hamzamogni5@gmail.com" },
      ],
    };
  },
};
</script>

<style></style>
