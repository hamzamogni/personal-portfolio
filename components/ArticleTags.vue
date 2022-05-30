<template>
  <v-row>
    <v-chip
      v-for="(tag, idx) in tags"
      :key="idx"
      outlined
      class="mx-1 mt-6"
      elevation="1"
      >{{ tag }}</v-chip
    >
  </v-row>
</template>

<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style></style>
