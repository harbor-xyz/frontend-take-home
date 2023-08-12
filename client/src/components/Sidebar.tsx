import React from 'react';
import { TTestnet } from '../components/TestnetCard';
import { useTestnets } from '../hooks/useTestnets';
import { StarIcon, MembersIcon, ProjectKeyIcon, TestnetsIcon, ArrowLeftIcon, AddIcon } from './Icon';

const Sidebar: React.FC = () => {
    const allTestnet: TTestnet[] = useTestnets('http://localhost:8000/testnets');
    return (
        <div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item text-secondary"><ArrowLeftIcon /> Back to all projects</li>
                <li className="list-group-item"><StarIcon /> Acme frontend</li>
                <li className="list-group-item"><ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between border-0 bg-light text-primary rounded"><span><TestnetsIcon color="primary" /> Testnets <span className="badge text-bg-light">{allTestnet.length}</span></span> <span><AddIcon color="secondary" /></span></li>
                    <li className="list-group-item d-flex justify-content-between border-0"><span><MembersIcon /> Members <span className="badge text-bg-light">1</span></span> <span><AddIcon color="secondary" /></span></li>
                    <li className="list-group-item d-flex justify-content-between border-0"><span><ProjectKeyIcon /> Project Key</span> <span><AddIcon color="secondary" /></span></li>
                </ul></li>
            </ul>

        </div>
    );
}

export default Sidebar;
