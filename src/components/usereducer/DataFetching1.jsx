import {useEffect, useReducer} from 'react';

const reducer = (state, action) => {
    switch(action.type) {
        case 'fetch':
            return {...state, loading: true};
        case 'fetchSuccess':
            return {...state, loading: false, data: action.payload};
        case 'fetchError':
            return {...state, loading: false, error: action.payload};
        default:
            return state;
    }
}

const initialState = {
    data: {},
    loading: true,
    error: ''
}

export default function DataFetching1() {

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);

    useEffect(() => {
        const loadData = async () => {
            try {
                const rez = await fetch('https://jsonplaceholder.typicode.com/posts/10');
                if (rez.status === 404) {
                    throw new Error('Not found');
                }
                const data = await rez.json();
                dispatch({type: 'fetchSuccess', payload: data});
            } catch (e) {
                dispatch({type: 'fetchError', payload: e.message});
            }
        }
        void loadData();
    }, []);

    return (
        <div>
            {state.loading && <div>Loading...</div>}
            {state.error && <div>{state.error}</div>}
            <div>{state.data?.length === 0 ? 'Not found' : state.data.title}</div>
        </div>
    )
}