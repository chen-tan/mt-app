import Vue from 'vue';
import VueRouter from 'vue-router';
import DefaultPage from '@/layout/default.vue';
Vue.use(VueRouter);

const routes=[
    {
        path:'/',
        name:'defaultPage',
        component:DefaultPage,
        redirect:'/index',
        children:[
            {
                path:'/index',
                name:'index',
                component:()=>import('@/page/index.vue')
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