<template>
    <v-img eager :src="require(`@/assets/images/${src}`)" :alt="alt"></v-img>
</template>
<script>
export default {
    name: 'ImageTag',
    props: {
        src: {
            type: String,
            required: true,
        },
        alt: {
            type: String,
            required: true,
        },
    },
}
</script>
