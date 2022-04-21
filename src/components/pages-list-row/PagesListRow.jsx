import { Link } from "react-router-dom";

export default function PagesListRow(props) {
    
    return (
        <>
            <Link className="link-secondary p-2" to={`/pages/${props.page.slug}`} >{props.page.title}</Link>
        </>
    );
}