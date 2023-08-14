import React from 'react';
import { TTestnet } from '../components/TestnetCard';
import { useTestnets } from '../hooks/useTestnets';
import { StarIcon, MembersIcon, ProjectKeyIcon, TestnetsIcon, ArrowLeftIcon, AddIcon, CopyIcon } from './Icon';

const Sidebar: React.FC = () => {
    const allTestnet: TTestnet[] = useTestnets('https://api.npoint.io/0131f18bfaa196cc2cc3');
    return (
        <div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item text-secondary"><ArrowLeftIcon color="secondary" className="me-2" /> Back to all projects</li>
                <li className="list-group-item"><StarIcon color="secondary" className="me-2" /> Acme frontend</li>
                <li className="list-group-item"><ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between border-0 bg-light text-primary rounded"><span><TestnetsIcon color="primary" className="me-2" /> Testnets <span className="badge text-bg-light">{allTestnet.length}</span></span> <span><AddIcon color="secondary" /></span></li>
                    <li className="list-group-item d-flex justify-content-between border-0"><span><MembersIcon className="me-2" /> Members <span className="badge text-bg-light">1</span></span> <span><AddIcon color="secondary" /></span></li>
                    <li className="list-group-item d-flex justify-content-between border-0"><span><ProjectKeyIcon className="me-2" /> Project Key</span> <span><CopyIcon color="secondary" /></span></li>
                </ul></li>
            </ul>

        </div>
    );
}

export default Sidebar;
