import Vue from 'vue';
import VueRouter from 'vue-router';
import DefaultPage from '@/layout/default.vue';
Vue.use(VueRouter);

const routes=[
    {
        path:'/',
        redirect:'/default/index'
    },
    {
        path:'/default',
        name:'default',
        component:DefaultPage,
        children:[
            {
                path:'index',
                component:()=>import('./components/index/index.vue')
            }
        ]
    },
    {
        path:'/blank',
        name:'blank',
        component:()=>import('@/layout/blank.vue')
    }
]

export default new VueRouter({
    routes,
    mode:'history'
})