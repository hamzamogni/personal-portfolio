<template>
  <v-row justify="center">
    <v-col
      v-for="(social, idx) in social_media"
      :key="idx"
      class="flex-grow-0 px-0"
    >
      <v-btn icon :href="social.href" target="_blank">
        <v-icon dense>{{ social.icon }}</v-icon>
      </v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      social_media: [
        { icon: "mdi-github", href: "https://github.com/hamzamogni" },
        {
          icon: "mdi-linkedin",
          href: "https://www.linkedin.com/in/hamza-mogni",
        },
        { icon: "mdi-twitter", href: "https://twitter.com/hamza_mogni" },
        { icon: "mdi-email", href: "mailto:hamzamogni5@gmail.com" },
      ],
    };
  },
};
</script>

<style></style>
