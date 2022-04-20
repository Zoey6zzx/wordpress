export default function CategoriesListRow(props) {

    return(
        <tr>
            <td>{props.category.id}</td>
            <td>{props.category.name}</td>
        </tr>
    );
}