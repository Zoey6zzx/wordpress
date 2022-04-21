import { Link } from "react-router-dom";

export default function PagesListRow(props) {
    
    return (
        <li>
            <Link className="nav-link px-2 text-white" to={`/pages/${props.page.slug}`} >{props.page.title}</Link>
        </li>
    );
}