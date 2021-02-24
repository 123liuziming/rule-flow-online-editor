import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
    path: '/',
    component: () =>
        import ('./../components/Index')
}, {
        path: '/custom-properties-panel',
        component: () =>
            import ('./../components/custom-properties-panel')
    },
]

export default new Router({
    mode: 'history',
    routes
})
