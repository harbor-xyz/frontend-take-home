import PropTypes from 'prop-types';
import './blockchain-icon-array.scss'

/**

Renders an array of blockchain icons.
@param {object} props - The props object for BlockchainIconArray component.
@param {array} props.icons - The array of icon URLs to be displayed.
@returns {JSX.Element} The BlockchainIconArray component.
*/
export default function BlockchainIconArray(props) {
    return <div className="icon_array">
        {props.icons.map((icon, index) =>
            <img key={index} className="icon_array__item" src={icon} />
        )}
    </div>
}

BlockchainIconArray.propTypes = {
    icons: PropTypes.arrayOf(PropTypes.string).isRequired,
};
