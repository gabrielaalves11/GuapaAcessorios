import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
    return (
        <>
            <header className="d-flex justify-content-center py-3 shadow-sm p-3 mb-5 bg-white rounded">
                <Link to={"/user"} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-black-50 text-decoration-none">
                    {/* <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg> */}
                    <span className="fs-4">Guapa Acessórios</span>
                </Link>

                <ul className="nav nav-pills">
                    <li className="nav-item"><Link to={"/categorias"} className="nav-link text-black-50">Categorias</Link></li>
                    <li className="nav-item"><Link to={"/produtos"} className="nav-link text-black-50">Catálogo</Link></li>
                    <li className="nav-item"><Link to={"/contatos"} className="nav-link text-black-50">Contatos</Link></li>
                    <Link type="button" className="btn color text-white" to="/">
                        <FontAwesomeIcon icon={faSignOutAlt} />
                    </Link>
                </ul>
            </header>
        </>
    );
}

export default Header;