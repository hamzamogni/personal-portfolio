<template>
    <v-btn icon x-large aria-label="Switch Theme" @click.prevent="switchTheme">
        <v-icon>{{ icon }}</v-icon>
    </v-btn>
</template>

<script>
import { mdiWeatherNight, mdiWhiteBalanceSunny } from '@mdi/js'
export default {
    computed: {
        icon: function () {
            return this.$vuetify.theme.dark ? mdiWhiteBalanceSunny : mdiWeatherNight
        },
    },

    mounted() {
        this.$vuetify.theme.dark = localStorage.getItem('dark') === 'true'
    },

    methods: {
        switchTheme() {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark
            localStorage.setItem('dark', this.$vuetify.theme.dark)
        },
    },
}
</script>

<style></style>
