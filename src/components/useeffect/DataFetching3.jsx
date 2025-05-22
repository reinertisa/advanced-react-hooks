import {useState, useEffect} from 'react';

export default function DataFetching3() {
    const [data, setData] = useState({} );
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState('');
    const [fetchId, setFetchId] = useState('');

    useEffect(() => {
        const loadData = async () => {
            try {
                const rez = await fetch(`https://jsonplaceholder.typicode.com/posts/${fetchId}`);
                setData(await rez.json());
                setLoading(false);
                setError(null);
            } catch (err) {
                setError('Error fetching data' + err.message);
                setLoading(false);
                setData(null);
            }
        }
        void loadData();
    }, [fetchId]);


    const handleChange = (e) => setId(e.target.value);
    const handleClick = () => {
        setFetchId(id);
        setId('')
    }

    return (
        <div>
            <input type="text" value={id} onChange={handleChange} />
            <button onClick={handleClick}>Fetch Data by Id</button>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <div>{data?.title}</div>
        </div>
    )


}