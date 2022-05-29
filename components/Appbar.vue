<template>
  <v-app-bar app elevation="0" color="transparent" class="mx-16 px-16" absolute>
    <v-toolbar-title>
      <v-btn href="/" text class="text-h6 font-weight-black">
        Hamza Mogni
      </v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn v-for="(btn, idx) in buttons" :key="idx" :to="btn.to" text>
      {{ btn.text }}
    </v-btn>

    <DarkThemeSwitch />
  </v-app-bar>
</template>

<script>
export default {
  name: "Appbar",

  data() {
    return {
      buttons: [
        { text: "Home", to: "/" },
        { text: "Contact", to: "/contact" },
      ],
    };
  },
};
</script>

<style scoped>
.theme--light.v-btn--active:hover::before,
.theme--light.v-btn--active::before {
  opacity: 0;
}
</style>
