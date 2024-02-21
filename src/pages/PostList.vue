<template lang="">
    <main class="container">
        <section class="row">
            <div class="col-12">
                <h1>
                    Our latest posts:
                </h1>
                <ul>

                    <li v-for="post in posts" :key="post.id">
                        {{ post.title }} -- {{ post.user.name }} -- {{ post.category.name }}
                        <img :src="post.post_image" alt="">
                    </li>
                </ul>

            </div>
        </section>
    </main>
</template>
<script>
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
            })
        }
    },

    created(){
        this.getPosts();
    }
}
</script>
<style lang="scss" scoped>

li img{
    width: 40px;
    margin-bottom: 2rem;
}



</style>