import { Post } from "../models/Post"

export const getPosts = (categoryId) => {
    return fetch(`http://localhost/epicode/bedrock/web/wp-json/wp/v2/${categoryId ? `posts?categories=${categoryId}` : 'posts'}`)
        .then(res => res.json())
        //.then(posts => console.log(posts))
        .then(posts => posts.map(post => new Post(post.id, post.title.rendered, post.content.rendered, post.author)))
}

/* export const getCategoryPosts = (categoryId) => {
    return fetch(`http://localhost/epicode/bedrock/web/wp-json/wp/v2/posts?categories=${categoryId}`)
        .then(res => res.json())
        .then(post => post.map(post => new Post(post.id, post.title.rendered, post.content.rendered, post.author)))
} */
