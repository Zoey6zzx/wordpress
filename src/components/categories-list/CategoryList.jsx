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
    return (
        <>
            {categories.map(category => <CategoriesListRow key={category.id} category={category} />)}
        </>
    );
}