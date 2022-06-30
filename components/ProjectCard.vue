<template>
    <v-card hover :to="path">
        <v-img :src="require(`~/assets/images/${img}`)"></v-img>
        <!-- <v-img src="https://via.placeholder.com/1000x800"></v-img> -->
        <v-card-title>
            {{ title }}
        </v-card-title>
        <v-card-text>
            {{ description }}
            <ArticleTags :tags="tags" class="mt-10" />
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    props: {
        img: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        tags: {
            type: Array,
            required: true,
        },
        path: {
            type: String,
            required: true,
        },
    },
}
</script>

<style></style>
