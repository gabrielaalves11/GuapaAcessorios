import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import logopreta from "../../imgs/logopreta.png";

const Header = () => {
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-7 shadow p-3 mb-5 bg-white rounded text-center">
                        <img src={logopreta} width="10%" alt=""></img>
                        <h4>Compra realizada com sucesso!!!</h4>
                        <p className="text-secondary">Obrigada pela preferência!</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;