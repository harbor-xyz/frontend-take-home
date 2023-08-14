import React from 'react';
import Card from '../components/Card';
import classnames from 'classnames';
import { getTimeAgo } from '../helpers/dateUtils';
import TestnetStatus from './TestnetStatus';
import { ClockIcon, DotIcon, SettingIcon, AlchemyIcon, EthereumIcon, ArbitrumIcon, PolygonIcon } from './Icon';


interface TestnetCardProps {
    data: TTestnet;
}

export type TTestnet = {
    id: string;
    name: string;
    status: string;
    testnet_off_chain_actors: any[];
    testnet_chains: any[];
    created_at: string;
    updated_at: string;
    [key: string]: any;
}

const ThemeClassMap: Record<string, string> = {
    FAILED: "border border-danger bg-danger-subtle",
    KILLED: "border border-secondary bg-secondary-subtle"
}


const TestnetCard: React.FC<TestnetCardProps> = ({ data }) => {
    const { name, status, testnet_off_chain_actors, testnet_chains, updated_at } = data;
    const themeClass = ThemeClassMap[status] || 'border-0';

    return (
        <Card className={classnames('p-2 my-4 shadow rounded-4', themeClass)}
            title={<div className="d-flex justify-content-between">
                <h4>{name} <span className="badge text-bg-light rounded-pill">5321</span></h4>
                <span><TestnetStatus status={status} /> <span className={classnames({ 'text-primary': ['RUNNING', 'FAILED', 'KILLED'].includes(status), 'text-secondary': !['RUNNING', 'FAILED', 'KILLED'].includes(status) })}><DotIcon width="0.4em" className="mx-2" /> <SettingIcon color={['RUNNING', 'FAILED', 'KILLED'].includes(status) ? "primary" : 'secondary'} /> Settings</span></span>
            </div>}
            content={<div className="d-flex justify-content-between">
                <span className="mx-2">{testnet_off_chain_actors?.length} off-chain actors <DotIcon width="0.4em" className="mx-2" /> <Chains chains={testnet_chains} /></span>
                <span className="text-secondary"><ClockIcon color="secondary" /> <span className='ms-1 fw-lighter'>Modified {getTimeAgo(new Date(updated_at).getTime())}</span></span>
            </div>}
        />
    );
}

const iconMap: Record<string, any> = {
    alchemy: AlchemyIcon,
    arbitrum: ArbitrumIcon,
    ethereum: EthereumIcon,
    polygon: PolygonIcon
}

const Chains: React.FC<any> = ({ chains }) => {
    if (!chains || chains.length === 0) return <span>0 Blockchain</span>;
    if (chains.length === 1) {
        const Blockchain = iconMap[chains[0].chain];
        if (!Blockchain) return null;
        return <span>1 Blockchain <button className="btn btn-light px-2 py-1 border"><Blockchain /></button></span>;
    }
    return <span>{chains.length} Blockchains {chains.map(({ chain }: any) => {
        const Blockchain = iconMap[chain];
        if (!Blockchain) return null;
        return <button className="btn btn-light px-2 py-1 border" key={chain}><Blockchain /></button>;
    })}</span>
}

export default TestnetCard;