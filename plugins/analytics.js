import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default (context, inject) => {
    Vue.use(
        VueGtag,
        {
            config: { id: 'G-6YG2573Y2D' },
            pageTrackerScreenviewEnabled: true,
        },
        context.app.router
    )

    context.$gtag = Vue.$gtag
    inject('gtag', Vue.$gtag)
}
