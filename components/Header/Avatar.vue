<template>
  <v-avatar size="100px">
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
