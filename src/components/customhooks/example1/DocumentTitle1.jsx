import useDocumentTitle from "./useDocumentTitle.js";

export default function DocumentTitle1() {
    const {count, handleClick} = useDocumentTitle();

    return (
        <div>
            <button onClick={handleClick}>Increment count - {count}</button>
        </div>
    )

}