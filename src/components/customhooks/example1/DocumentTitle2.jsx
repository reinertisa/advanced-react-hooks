import useDocumentTitle from "./useDocumentTitle.js";

export default function DocumentTitle2() {
    const {count, handleClick} = useDocumentTitle(10);

    return (
        <div>
            <button onClick={handleClick}>Increment count - {count}</button>
        </div>
    )
}