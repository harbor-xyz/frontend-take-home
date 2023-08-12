import React, { useState, useEffect } from 'react';
import { TTestnet } from '../components/TestnetCard';


export const useTestnets = (url: string) => {
    const [testnets, setTestnets] = useState<TTestnet[]>([]);

    useEffect(() => {
        fetch(url)
            .then(r => r.json())
            .then(({ data: { testnet } }) => {
                setTestnets(testnet);
            }).catch(console.error);
    }, [url]);

    return testnets;

}