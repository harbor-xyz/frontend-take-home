
import './testnet-header.scss';

export default function TestnetHeader() {
    return <div className="testnet_header">
        <header className="testnet_header__name">Testnets (5)
            <span className="testnet_header__add_new">+ New Testnet</span>
        </header>
        <div className="testnet_header__filter_sort_container">
            <h3>Filter</h3>
            <h3>Sorter</h3>
        </div>
    </div>
}