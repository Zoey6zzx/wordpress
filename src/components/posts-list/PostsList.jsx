import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPosts } from "../../functions/posts";
import PostsListRow from "../posts-list-row/PostsListRow";

export default function PostsList() {
    //const [hasLoaded, setHasLoaded] = useState(false);
    const [posts, setPosts] = useState([]);
    const {categoryId} = useParams();

/*     if (!hasLoaded) {
        getPosts(categoryId).then(posts => {
            setPosts(posts);
            setHasLoaded(true);
        });
    } */

    useEffect(() => {
        getPosts(categoryId).then(posts => {
            setPosts(posts);
        });

    }, [categoryId])


    return (
        <div className="container m-5">
            <div className="row">
                {posts.map(post => <PostsListRow key={post.id} post={post} />)}
            </div>
        </div>

    )
}