import { Category } from "../models/Category"

export const getCategories = () => {
    return fetch('http://localhost/epicode/bedrock/web/wp-json/wp/v2/categories')
        .then(res => res.json())
        //.then(categories => console.log(categories))
        .then(categories => categories.map(category => new Category(category.id, category.name)))
}

export const categoryObjToModel = category => new Category(category.id, category.name)


