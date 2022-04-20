import { Page } from "../models/Page";

export const getPages = () => {
    return fetch('http://localhost/epicode/bedrock/web/wp-json/wp/v2/pages/')
        .then(res => res.json())
        //.then(pages => console.log(pages))
        .then(pages => pages.map(page => new Page(page.title.rendered, page.content.rendered)))
}