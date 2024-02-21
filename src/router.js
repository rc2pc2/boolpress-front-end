import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import PostList from './pages/PostList.vue';
import NotFound from './pages/NotFound.vue';
import SinglePost from './pages/SinglePost.vue';
import CategoriesList from './pages/CategoriesList.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/posts',
            name: 'posts',
            component: PostList
        },
        {
            path: '/posts/:id',
            name: 'single-post',
            component: SinglePost
        },
        {
            path: '/categories',
            name: 'categories',
            component: CategoriesList
        },
        {
            path: '/404',
            name: 'not-found',
            component: NotFound
        },
    ]
});

export { router }