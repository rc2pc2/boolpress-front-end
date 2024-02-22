<template lang="">
    <main class="container">
        <section class="row justify-content-center">
            <div class="col-12">
                <h1 class="pt-5 pb-3">
                    Looking for posts:
                </h1>
            </div>
            <div class="col-12">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingInput" v-model="queryString" @keyup.enter="getPosts(queryString)">
                    <label for="floatingInput">Search a post by title</label>
                </div>
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
            queryString: '',
        }
    },
    methods:{
        getPosts(title){
            axios.get('http://127.0.0.1:8000/api/posts/search', {
                params: {
                    title: title,
                }
            })
            .then((response) => {
                console.log(response.data.results);
                this.posts = response.data.results;

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
}
</script>
<style lang="scss">
</style>