<template lang="">
    <main class="container">
        <section class="row justify-content-center">
            <div class="col-12">
                <h1 class="pt-5 pb-3">
                    Our latest posts:
                </h1>
            </div>
            <SingleCard class="card p-0 col-3 mx-4 my-5" v-for="post in posts" :key="post.id"
                :title="post.title" :image="post.post_image" :content="post.content" :linkRoute="{ name: 'single-post', params: { id: post.id}}" linkLabel="Read more..."
            />
        </section>
    </main>
</template>
<script>
import SingleCard from '@/components/SingleCard.vue';
import axios from 'axios';

export default {
    name: 'PostList',
    data(){
        return{
            posts: [],
        }
    },
    methods:{
        getPosts(){
            axios.get('http://127.0.0.1:8000/api/posts', {
                params: {
                }
            })
            .then((response) => {
                console.log(response.data.results.data);
                this.posts = response.data.results.data;

            })
            .catch(function (error) {
                console.warn(error);
                this.$router.push({ name: 'not-found' })
            })
        }
    },
    components:{
        SingleCard
    },

    created(){
        this.getPosts();
    }
}
</script>
<style lang="scss">
</style>