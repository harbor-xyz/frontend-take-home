import { useEffect, useRef, useReducer, useState } from 'react';
import { FETCH_STATUS } from '../utils/mapping';

// Initialize the initial state of the data fetched from the API
const initialState = {
    status: FETCH_STATUS.IDLE,
    error: null,
    data: {},
};

// Custom Hook to fetch data from an API
export default function useFetch(url) {
    // Creating a cache using useRef hook to store fetched data
    const cache = useRef({});

    // Initializing the current status of fetching the data from the API
    const [status, setStatus] = useState(FETCH_STATUS.IDLE);

    // Initializing the data returned from the API
    const [data, setData] = useState({});

    // useReducer hook is used to manage complex state logic
    // Here, it is used to manage the data, status and error messages
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

    // fetch data from the API
    useEffect(() => {
        // If the URL is empty, return early and do nothing
        if (!url) return;

        // Define an async function to fetch data from the API
        const fetchData = async () => {

            // Dispatch an action to indicate that the data is being fetched
            dispatch({ type: 'FETCHING' });

            // Check if the data is available in the cache, if yes, return it from the cache
            if (cache.current[url]) {
                const data = cache.current[url];
                dispatch({ type: 'FETCHED', payload: data });
            } else {
                try {
                    // Fetch the data from the API
                    const response = await fetch(url);

                    const data = await response.json();

                    // Cache the fetched data
                    cache.current[url] = data;

                    // Dispatch an action to indicate that the data has been fetched successfully
                    dispatch({ type: 'FETCHED', payload: data });
                } catch (error) {
                    // Dispatch an action to indicate that there was an error fetching the data
                    // which is used in App.js to show an error message on the page
                    dispatch({ type: 'FETCH_ERROR', payload: error.message });
                }
            }
        };

        // Call the fetchData function to fetch the data
        fetchData();
    }, [url]);

    // Return the state object containing the status, error and data
    return { ...state };
};
