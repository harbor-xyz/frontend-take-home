import React, { useState, useEffect } from 'react';
import { TTestnet } from '../components/TestnetCard';


export const useTestnets = (url: string) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>(null);
    const [testnets, setTestnets] = useState<TTestnet[]>([]);

    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch(url, { headers: { "Security-key": "akm" } })
            .then(response => {
                if (!response.ok) {
                    setError(response.status);
                }
                setLoading(false);
                return response.json();
            })
            .then(({ testnet }) => setTestnets(testnet)).catch(setError);
    }, [url]);

    return { loading, error, testnets };

}