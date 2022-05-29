<template>
  <v-avatar size="100px" class="elevation-3">
    <v-img :src="src"></v-img>
  </v-avatar>
</template>
<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
};
</script>
