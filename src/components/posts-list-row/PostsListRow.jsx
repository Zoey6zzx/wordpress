export default function PostsListRow(props) {

    return (
        <div class="col-md-4">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                <div class="col p-4 d-flex flex-column position-static">
                    <h3 class="mb-0">{props.post.title}</h3>
                    <div class="mb-1 text-muted">Author: {props.post.author}</div>
                    <p class="card-text mb-auto" dangerouslySetInnerHTML={{ __html: props.post.content}}></p>
                </div>
            </div>
        </div>
    )
}

{/* <elem dangerouslySetInnerHTML={{ __html: prop }} /> */ }
