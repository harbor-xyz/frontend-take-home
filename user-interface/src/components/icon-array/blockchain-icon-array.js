import './blockchain-icon-array.scss'

export default function BlockchainIconArray(props) {
    return <div className="icon_array">
        {props.icons.map((icon, index) =>
            <img key={index} className="icon_array__item" src={icon} />
        )}
    </div>
}