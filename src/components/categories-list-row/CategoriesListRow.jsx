export default function CategoriesListRow(props) {

    return(
        <li><a href="#" className="nav-link px-2 text-secondary">{props.category.name}</a></li>
    );
}