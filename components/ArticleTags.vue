<template>
    <v-row>
        <v-col v-for="(tag, idx) in tags" :key="idx" class="flex-grow-0 px-1 py-1">
            <v-chip outlined elevation="1">{{ tag }}</v-chip>
        </v-col>
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
}
</script>

<style></style>
