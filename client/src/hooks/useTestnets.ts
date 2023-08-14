import React, { useState, useEffect } from 'react';
import { TTestnet } from '../components/TestnetCard';


export const useTestnets = (url: string) => {
    const [testnets, setTestnets] = useState<TTestnet[]>([]);

    useEffect(() => {
        fetch(url, { headers: { "Security-key": "akm" } })
            .then(r => r.json())
            .then(({ data: { testnet } }) => {
                console.log(testnet);
                setTestnets(testnet);
            }).catch(console.error);
    }, [url]);

    return testnets;

}