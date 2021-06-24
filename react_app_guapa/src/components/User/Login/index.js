import React, { useState } from 'react';
import UserDataService from "../../../services/User/index";
import { TOKEN_KEY } from "../../../services/shared/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style.css";
import logobranca from "../../../imgs/logobranca.png";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

const Login = props => {
    const [user, setUser] = useState({ id: null, login: "", password: "" });

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const sendLogin = () => {
        var data = {
            login: user.login,
            password: user.password
        };

        UserDataService.login(data)
            .then(response => {
                localStorage.setItem(TOKEN_KEY, response.data?.result?.token);
                console.log(TOKEN_KEY + ": " + localStorage.getItem(TOKEN_KEY));
                props.history.push("/comprarProdutos");
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <>
            <div className="container">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-5 d-none d-lg-block bg-info">
                                <div className="col text-center m-3">
                                <div className="col">
                                    <img src={logobranca} width="50%" alt="" />
                                    <h4 className="text-white"><em>Guapa Acessórios</em></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Seja bem vindo!</h1>
                                    </div>
                                    <hr />

                                    <div className="input-group mb-3">
                                        <span className="input-group-text"><FontAwesomeIcon icon={faUser} /></span>
                                        <input type="text" className="form-control" id="login" value={user.login} onChange={handleInputChange} name="login" placeholder="Digite seu login" required />
                                    </div>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text"><FontAwesomeIcon icon={faKey} /></span>
                                        <input type="password" className="form-control" id="password" value={user.password} onChange={handleInputChange} name="password" placeholder="Digite sua senha" required />
                                    </div>
                                    <hr />

                                    <div className="d-grid gap-2">
                                        <Button variant="info text-white" size="lg" block onClick={sendLogin}>Entrar</Button>
                                    </div>

                                    <footer>
                                        <p className="mt-5 mb-3 text-muted text-center">© 2021: Desenvolvido por Gabriela Alves</p>
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;