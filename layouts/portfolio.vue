<template>
    <v-app>
        <Appbar />
        <v-main>
            <v-container fluid>
                <v-row justify="center">
                    <v-col cols="12" md="8">
                        <Nuxt />
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>
<script>
export default {
    name: 'PortfolioLayout',
}
</script>
