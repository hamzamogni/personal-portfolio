<template>
    <v-avatar size="100px">
        <v-img :src="src"></v-img>
    </v-avatar>
</template>
<script>
export default {
    name: 'HeaderAvatar',
    props: {
        src: {
            type: String,
            required: true,
        },
    },
}
</script>
