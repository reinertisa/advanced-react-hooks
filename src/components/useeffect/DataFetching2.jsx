import {useState, useEffect} from 'react';

export default function DataFetching2() {

    const [data, setData] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState(0);

    useEffect(() => {
        const loadData = async () => {
            try {
                const rez = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
                setData(await rez.json());
                setLoading(false);
                setError(null);
            } catch (err) {
                console.log(err);
                setError('Error fetching data' + err.message);
                setLoading(false);
                setData(null);
            }
        }

        void loadData();
    }, [id])

    const handleChange = (event) => setId(event.target.value);

    return (
        <div>
            <input type="text" value={id} onChange={handleChange} />
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <div>{Object.keys(data)?.length === 0 ? 'Not found' : data.title}</div>
        </div>
    )
}