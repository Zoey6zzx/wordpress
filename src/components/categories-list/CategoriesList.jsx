import { useState } from "react";
import { getCategories } from "../../functions/categories";
import CategoriesListRow from "../categories-list-row/CategoriesListRow";

export default function CategoriesList() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const [categories, setCategories] = useState([]);
    
    if (!hasLoaded) {
        getCategories().then(categories => {
            setCategories(categories);
            setHasLoaded(true);
        });
    }
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                </tr>
            </thead>
            <tbody>
                { categories.map(category => <CategoriesListRow key={category.id} category={category} />)}
            </tbody>
        </table>
    );
}