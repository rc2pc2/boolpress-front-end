import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import PostList from './pages/PostList.vue';
import PostSearch from './pages/PostSearch.vue';
import PostSearchEager from './pages/PostSearchEager.vue';
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
            path: '/posts-search',
            name: 'posts-search',
            component: PostSearch
        },
        {
            path: '/posts-search-eager',
            name: 'posts-search-eager',
            component: PostSearchEager
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