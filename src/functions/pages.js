import { Page } from "../models/Page";

export const getPages = (slug) => {
    return fetch(`http://localhost/epicode/bedrock/web/wp-json/wp/v2/${slug ? `pages/?slug=${slug}` : 'pages'}`)
        .then(res => res.json())
        //.then(pages => console.log(pages))
        .then(pages => pages.map(page => new Page(page.id, page.title.rendered, page.content.rendered, page.slug)))
}