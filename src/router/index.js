import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes.js';

const routerHistory = createWebHistory();

const router = createRouter({
    history: routerHistory,
    routes
})

router.beforeEach((to, from ,next)=>{
    let token = sessionStorage.getItem('token');
    if(to.meta.auth){
        if(token){
            next();
        }else{
            next(`/login?redirect=${to.path}`);
        }
    }else{
        next();
    }
})

export default router;