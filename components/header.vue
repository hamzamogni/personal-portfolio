<template>
    <span class="text-center">
        <v-row justify="center">
            <HeaderAvatar :src="require('@/assets/hmogni.jpg')" />
        </v-row>

        <v-card-title class="justify-center text-h5 font-weight-bold"> Hamza Mogni </v-card-title>

        <v-card-subtitle class="text-body-1 font-weight-bold text--secondary pb-2"> Data Engineer </v-card-subtitle>

        <v-card-text class="text--secondary text-subtitle-1 mt-0 pt-0">
            I am a Data Engineer passionate about building data-driven products, with a background in Software
            Engineering.
            <HeaderSocialMedia class="mt-0" />
        </v-card-text>
        <v-divider class="pa-0 mt-0 mb-8"></v-divider>
    </span>
</template>

<script>
export default {
    name: 'AppHeader',
}
</script>

<style></style>
