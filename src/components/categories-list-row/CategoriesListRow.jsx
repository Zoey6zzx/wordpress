export default function CategoriesListRow(props) {

    return(
        <li><a href={`/posts?categories=${props.category.id}`} className="nav-link px-2 text-secondary">{props.category.name}</a></li>
    );
}