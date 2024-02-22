<template lang="">
    <main class="container">
        <section class="row justify-content-center">
            <div class="col-12">
                <h1 class="pt-5 pb-5">
                    Showing active categories:
                </h1>
            </div>
            <div class="col-4 " v-for="category in categories" :key="category.id">
                <h3>
                    <span :style="`color: ${category.color}`">&#9679;</span>
                        {{ category.name }}
                    <span :style="`color: ${category.color}`">&#9679;</span>
                </h3>
                <p>
                    {{ category.posts.length }} posts
                </p>
                <ul>
                    <li v-for="post in category.posts.slice(0,6)">
                        <router-link :to="{name: 'single-post', params: { id: post.id}}">
                            {{ post.title }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </section>

        <!-- :linkRoute="{ name: 'single-category', params: { id: post.id}}" linkLabel="Read more..." -->
    </main>
</template>
<script>
import SingleCard from '@/components/SingleCard.vue';
import axios from 'axios';

export default {
    name: 'CategoriesList',
    data(){
        return{
            categories: [],
        }
    },
    methods:{
        getCategories(){
            axios.get('http://127.0.0.1:8000/api/categories', {
                params: {
                }
            })
            .then((response) => {
                console.log(response.data.data);
                this.categories = response.data.data;

            })
            .catch(function (error) {
                console.warn(error);
                // this.$router.push({ name: 'not-found' })
            })
        }
    },
    components:{
        SingleCard
    },

    created(){
        this.getCategories();
    }
}
</script>

<style lang="scss">
</style>