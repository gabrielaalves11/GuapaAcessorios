import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import logobranca from "../../imgs/logobranca.png";

const Header = () => {
    return (
        <>
            <header className="d-flex py-3 shadow-sm p-3 mb-5 bg-info rounded">
                <Link to={"/"} className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-4"><img src={logobranca} width="45px" alt="" /> Guapa Acessórios</span>
                </Link>

                <ul className="nav nav-pills">
                    <li className="nav-item"><Link to={"/comprarProdutos"} className="nav-link text-white">Comprar</Link></li>
                    <li className="nav-item"><Link to={"/catálogo"} className="nav-link text-white">Catálogo</Link></li>
                    <li className="nav-item"><Link to={"/"} className="nav-link text-white">Sair</Link></li>
                </ul>
            </header>
        </>
    );
}

export default Header;