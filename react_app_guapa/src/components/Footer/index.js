import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { faFacebook, faGoogle, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
    return (
        <div>
            <footer className="bg-transparent text-center text-white">
                <div className="container p-4 pb-0">
                    <section className="mb-0">
                        <Link className="btn btn-outline-info m-1" to={""} role="button">
                            <FontAwesomeIcon icon={faFacebook} />
                        </Link>

                        <Link className="btn btn-outline-info m-1" to={""} role="button">
                            <FontAwesomeIcon icon={faGoogle} />
                        </Link>

                        <Link className="btn btn-outline-info m-1" to={""} role="button">
                            <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                    </section>
                </div>

                <div className="text-center p-3 text-muted">
                    © 2021: Desenvolvido por Gabriela Alves
                </div>
            </footer>
        </div>
    );
}

export default Header;