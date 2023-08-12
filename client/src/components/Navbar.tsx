import React from 'react';
import { ProjectsIcon, UserKeyIcon, HarborLogoIcon, DocsIcon, CommandSheetIcon, ArrowDownIcon, UserCircleIcon } from '../components/Icon';


const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand mx-4" href="#"><HarborLogoIcon width='100px' /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#"><ProjectsIcon color="secondary" className="mx-1" /> Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><DocsIcon color="secondary" className="mx-1" /> Docs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link"><CommandSheetIcon color="secondary" className="mx-1" /> Command cheatsheet</a>
                        </li>
                    </ul>
                    <div className="d-flex justify-content-between align-items-center me-2">
                        <span className="me-4 text-secondary">
                            <UserKeyIcon color="secondary" /> Your user key
                        </span>
                        <UserCircleIcon width="1.75em" height="1.75em" className="me-2" />
                        <ArrowDownIcon color="secondary" />
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
