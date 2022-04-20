export class Post {
    constructor(id, title, content, author, category) {
        this.author = author;
        this.category = category;
        this.content = content;
        this.id = id;
        this.title = title;
    }
}