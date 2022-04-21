import { Link } from "react-router-dom";

export default function CategoriesListRow(props) {

    return(
        <>
            <Link className="link-secondary p-2" to={`/categories/${props.category.id}/posts/`}>{props.category.name}</Link>
        </>
    );
}