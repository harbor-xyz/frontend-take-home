import TestnetView from '../testnet-view/testnet-view';

import './main-view.scss';

/* Depending on the current url (as per user selection) we will render TestnetView, MemberView or ProjectKey view */
export default function MainView() {
    return <section className="mainview">
        <TestnetView />
    </section>
}