import React, { useState } from 'react';
import UserDataService from "../../../services/User/index";
import { TOKEN_KEY } from "../../../services/shared/api";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../style.css";

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
                props.history.push("/categorias");
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-sm-7 shadow p-3 mb-5 bg-white rounded">
                        <h5>Realizar Login</h5>
                        <hr />
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Usuário:</label>
                            <input type="text" className="form-control" id="login" value={user.login} onChange={handleInputChange} name="login" placeholder="Digite seu nome" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Senha:</label>
                            <input type="password" className="form-control" id="password" value={user.password} onChange={handleInputChange} name="password" placeholder="Digite sua senha" required />
                        </div>
                        <div className="d-grid gap-2">
                            <hr />
                            <button type="button" className="btn color text-white" onClick={sendLogin}>Entrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;