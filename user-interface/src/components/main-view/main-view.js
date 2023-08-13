import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import TestnetView from '../testnet-view/testnet-view';
import { TESTNET_PROPTYPE } from '../../utils/types';
import { ErrorBoundary } from 'react-error-boundary'
import ErrorHandler from '../error-handler/error-handler';

import './main-view.scss';

/**
Renders different views based on the current URL selected by the user.
@param {object} props - The props object for MainView component.
@param {array} props.testnets - The array of testnets to be displayed in the main view.
@returns {JSX.Element} The MainView component.
*/
function MainView({ testnets }) {
    return <section className="mainview">
        <Routes>
            <Route exact path="/" element={<ErrorBoundary FallbackComponent={ErrorHandler}>
                <TestnetView testnets={testnets} />
            </ErrorBoundary>} />
            {/* Add your future route views here for Members and Project Key view */}
        </Routes>
    </section>
}

const testnetPropType = PropTypes.shape(TESTNET_PROPTYPE);

const testnetsPropType = PropTypes.arrayOf(testnetPropType);

MainView.propTypes = {
    testnets: testnetsPropType.isRequired
};

export default React.memo(MainView);
