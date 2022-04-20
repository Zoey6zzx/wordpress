import { Post } from "../models/Post"

export const getPosts = () => {
    return fetch('http://localhost/epicode/bedrock/web/wp-json/wp/v2/posts')
        .then(res => res.json())
        //.then(posts => console.log(posts))
        .then(posts => posts.map(post => new Post(post.id, post.title.rendered, post.content.rendered, post.author)))
}


