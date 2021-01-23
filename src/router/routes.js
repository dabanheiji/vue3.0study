import Home from '../pages/Home/index.vue';
import Login from '../pages/Login/index.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/diarylist',
        name: 'DiaryList',
        component: ()=>import('../pages/DiaryList/index.vue')
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        component: ()=>import('../pages/Detail/index.vue')
    },
    {
        path: '/writediary',
        name: 'WriteDiary',
        component: ()=>import('../pages/WriteDiary/index.vue'),
        meta:{
            auth: true
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    }
]

export default routes;