import React, { useState, useEffect } from 'react';
import { TTestnet } from '../components/TestnetCard';


export const useTestnets = (url: string) => {
    const [testnets, setTestnets] = useState<TTestnet[]>([]);

    useEffect(() => {
        fetch(url, { headers: { "Security-key": "akm" } })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(({ testnet }) => setTestnets(testnet)).catch(console.error);
    }, [url]);

    return testnets;

}