import { useEffect, useRef, useReducer, useState } from 'react';
import { FETCH_STATUS } from '../utils/mapping';

const initialState = {
    status: FETCH_STATUS.IDLE,
    error: null,
    data: {},
};

export default function useFetch(url) {
    const cache = useRef({});
    const [status, setStatus] = useState(FETCH_STATUS.IDLE);
    const [data, setData] = useState({});

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'FETCHING':
                return { ...initialState, status: FETCH_STATUS.FETCHING };
            case 'FETCHED':
                return { ...initialState, status: FETCH_STATUS.FETCHED, data: action.payload };
            case 'FETCH_ERROR':
                return { ...initialState, status: FETCH_STATUS.ERROR, error: action.payload };
            default:
                return state;
        }
    }, initialState);

    useEffect(() => {
        if (!url) return;

        const fetchData = async () => {
            dispatch({ type: 'FETCHING' });
            if (cache.current[url]) {
                const data = cache.current[url];
                dispatch({ type: 'FETCHED', payload: data });
            } else {
                try {
                    const response = await fetch(url);
                    const data = await response.json();
                    cache.current[url] = data;
                    dispatch({ type: 'FETCHED', payload: data });
                } catch (error) {
                    dispatch({ type: 'FETCH_ERROR', payload: error.message });
                }
            }
        };

        fetchData();
    }, [url]);

    return { ...state };
};
