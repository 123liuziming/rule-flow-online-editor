import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [{
    path: '/',
    component: () =>
        import ('./../components/Login')
}, {
        path: '/Editor',
        component: () =>
            import ('./../components/custom-properties-panel')
    },
    {
        path: '/Index',
        component: () =>
            import ('./../components/Index')
    }
]

export default new Router({
    mode: 'history',
    routes
})
