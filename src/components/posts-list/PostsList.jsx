import { useState } from "react";
import { getPosts } from "../../functions/posts";
import PostsListRow from "../posts-list-row/PostsListRow";

export default function PostsList() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const [posts, setPosts] = useState([]);

    if (!hasLoaded) {
        getPosts().then(posts => {
            setPosts(posts);
            setHasLoaded(true);
        });
    }

    return (
        <div className="container m-5">
            <div className="row">
                {posts.map(post => <PostsListRow key={post.id} post={post} />)}
            </div>
        </div>

    )
}