import PostsList from "../posts-list/PostsList";
import Footer from "../footer/Footer";
import Header from "../header/Header";

export default function Home() {
    return (
        <div>
            <Header />
            <PostsList />
            <Footer />
        </div>
    );
}