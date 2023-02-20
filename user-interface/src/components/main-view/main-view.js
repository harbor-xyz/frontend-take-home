import { Routes, Route } from 'react-router-dom';
import TestnetView from '../testnet-view/testnet-view';

import './main-view.scss';

/* Depending on the current url (as per user selection) we will render TestnetView, MemberView or ProjectKey view */
export default function MainView({ testnets }) {
    return <section className="mainview">
        <Routes>
            <Route exact path="/" element={<TestnetView testnets={testnets} />} />
            {/* Add your future route views here for Members and Project Key view */}
        </Routes>
    </section>
}
