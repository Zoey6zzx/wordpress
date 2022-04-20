export default function PagesListRow(props) {

    return (
        <div>
            <h1>{props.page.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: props.page.content }}></p>
        </div>
    )
}