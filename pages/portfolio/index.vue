<template>
    <v-row>
        <v-col v-for="(project, idx) in projects" :key="idx" cols="12" sm="6">
            <ProjectCard
                :img="project.img"
                :title="project.title"
                :tags="project.tags"
                :description="project.description"
                :path="project.path"
                class="ma-3"
            />
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'PortfolioIndex',
    layout: 'portfolio',

    async asyncData({ $content }) {
        const projects = await $content('portfolio')
            .only(['title', 'tags', 'slug', 'description', 'img'])
            .sortBy('featured', 'desc')
            .sortBy('createdAt', 'desc')
            .fetch()

        const tags = await $content('portfolio').only('tags').fetch()

        const merged = []
        tags.forEach((element) => {
            merged.push(...element.tags)
        })

        console.log([...new Set(merged)])
        return {
            projects,
        }
    },
}
</script>

<style></style>
