import { Post } from "../models/Post"
import { categoryObjToModel } from "./categories";

export const getPosts = (categoryId) => {
    return fetch(`http://localhost/epicode/bedrock/web/wp-json/wp/v2/${categoryId ? `posts?categories=${categoryId}` : 'posts'}`)
        .then(res => res.json())
        //.then(posts => console.log(posts))
        .then(posts => posts.map(post => new Post(
            post.id,
            post.title.rendered,
            post.content.rendered,
            post.author,
            post.category ? categoryObjToModel(post.category) : null
        )));
}

