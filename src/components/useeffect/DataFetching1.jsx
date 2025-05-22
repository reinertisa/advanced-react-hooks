import {useState, useEffect} from 'react';

export default function DataFetching1() {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const rez = await fetch('https://jsonplaceholder.typicode.com/posts');
                setData(await rez.json());
                setLoading(false);
                setError(null);
            } catch (err) {
                setError('Error fetching data' + err.message);
                setLoading(false);
                setData(null);
            }
        }
        setTimeout(loadData, 2000)
    }, [])

    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {data && (
                <ul>
                    {data.map(item => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            )}
        </div>
    )

}