export default function PostsListRow(props) {

    return (
        <div className="col-sm-4">
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{props.post.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Author: {props.post.author}</h6>
                    <p className="card-text" dangerouslySetInnerHTML={{ __html: props.post.content }}></p>
                </div>
            </div>
        </div>



    )
}

{/* <elem dangerouslySetInnerHTML={{ __html: prop }} /> */ }
