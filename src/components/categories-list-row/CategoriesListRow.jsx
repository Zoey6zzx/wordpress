import { Link } from "react-router-dom";

export default function CategoriesListRow(props) {

    return(
        <li>
            <Link className="nav-link px-2 text-secondary" to={`/categories/${props.category.id}/posts/`}>{props.category.name}</Link>
        </li>
    );
}