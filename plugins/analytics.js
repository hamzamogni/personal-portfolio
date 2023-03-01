import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default (context, inject) => {
    let id = process.env.NODE_ENV === 'development' ? '' : 'G-6YG2573Y2D'

    Vue.use(
        VueGtag,
        {
            config: { id: id },
            pageTrackerScreenviewEnabled: true,
            appName: 'Hamza Mogni Website',
        },
        context.app.router
    )

    context.$gtag = Vue.$gtag
    inject('gtag', Vue.$gtag)
}
