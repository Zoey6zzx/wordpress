import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPosts } from "../../functions/posts";
import PostsListRow from "../posts-list-row/PostsListRow";

export default function PostsList() {
    const [posts, setPosts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        getPosts(categoryId).then(posts => {
            setPosts(posts);
        });

    }, [categoryId])


    return (
        <div class="row mb-2">
            {posts.map(post => <PostsListRow key={post.id} post={post} />)}
        </div>
    )
}