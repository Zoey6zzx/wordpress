import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPages } from "../../functions/pages";
import PagesListRow from "../pages-list-row/PagesListRow";
import PagesListRow2 from "../pages-list-row/PagesListRow2";

export default function PagesList(props) {
    const showPages = props.showPages;
    //const [hasLoaded, setHasLoaded] = useState(false);
    const [pages, setPages] = useState([]);
    const {slug} = useParams();

    /* if (!hasLoaded) {
        getPages(pageId).then(pages => {
            setPages(pages);
            setHasLoaded(true);
        });
    } */

    useEffect(() => {
        getPages(slug).then(pages => {
            setPages(pages);
        });
    }, [slug])

    if(showPages) {
        return (
            <>
                {pages.map(page => <PagesListRow2 key={page.id} page={page} />)}
            </>
        )
    }
    
    return (

        <>
            {pages.map(page => <PagesListRow key={page.id} page={page} />)}
        </>
    )
    
}