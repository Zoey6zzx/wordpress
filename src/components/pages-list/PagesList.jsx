import { useState } from "react";
import { getPages } from "../../functions/pages";
import PagesListRow from "../pages-list-row/PagesListRow";

export default function PagesList() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const [pages, setPages] = useState([]);

    if (!hasLoaded) {
        getPages().then(pages => {
            setPages(pages);
            setHasLoaded(true);
        });
    }

    return (
        <section>
            {pages.map(page => <PagesListRow key={page.id} page={page} />)}
        </section>
    )
}