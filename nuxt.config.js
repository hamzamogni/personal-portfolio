import colors from 'vuetify/es5/util/colors'

export default {
    target: 'static',
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s',
        title: 'Hamza Mogni',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            {
                charset: 'utf-8',
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                name: 'format-detection',
                content: 'telephone=no',
            },
            {
                name: 'author',
                content: 'Hamza Mogni',
            },
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico',
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [{ src: '~/plugins/analytics.js', mode: 'client' }],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
        '@nuxtjs/google-fonts',
        '@nuxtjs/eslint-module',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        'nuxt-content-git',
        '@nuxt/content',
        [
            '@nuxtjs/robots',
            {
                UserAgent: '*',
                Allow: '*',
            },
        ],
        'nuxt-seo-meta',
        '@nuxtjs/sitemap',
    ],

    sitemap: {
        hostname: 'https://hmogni.me',

        routes: async () => {
            const { $content } = require('@nuxt/content')
            const articles = await $content('articles').only(['slug', 'createdAt']).fetch()
            const routes = articles.map((article) => {
                return {
                    url: `/blog/${article.slug}`,
                    lastmod: article.createdAt,
                }
            })
            return routes
        },
    },

    seoMeta: {
        keywords: 'hamza mogni, data engineer, data, engineer, distributed systems, engineering, data engineering',
        description:
            'Personal website of Hamza Mogni, where I share my thoughts and experiences. I am a data engineer and I am passionate about building and engineering data-intensive applications.',
    },

    googleFonts: {
        families: {
            'Source Sans Pro': true,
        },
        display: 'swap',
    },

    content: {},

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        defaultAssets: false,
        customVariables: ['~/assets/variables.scss'],
        treeShake: {
            loaderOptions: {
                progressiveImages: true,
            },
        },
        theme: {
            dark: false,
            themes: {
                dark: {
                    primary: '#3eaf7c',
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3,
                },
                light: {
                    primary: '#3eaf7c',
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3,
                },
            },
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extractCSS: true,
    },
}
