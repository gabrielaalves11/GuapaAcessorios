import React, { useState, useEffect } from "react";
import CategoryDataService from "../../../services/Category/index";
import ProductDataService from "../../../services/Product/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { faEdit, faSearch, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ListCategory = props => {
    const [categorys, setCategorys] = useState([]);
    const [/** products */, setProducts] = useState([]);
    const [searchName, setSearchName] = useState("");

    const getProduct = id => {
        ProductDataService.get(id)
            .then(response => {
                setProducts(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getProduct(props.match.params.id);
    }, [props.match.params.id]);

    useEffect(() => {
        retrieveCategorys();
    }, []);

    const onChangeSearchName = e => {
        const searchName = e.target.value;
        setSearchName(searchName);
    };

    const retrieveCategorys = () => {
        CategoryDataService.getAll()
            .then(response => {
                setCategorys(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const findByName = () => {
        if (searchName !== '') {
            CategoryDataService.findByName(searchName)
                .then(response => {
                    setCategorys(response.data);
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        } else {
            retrieveCategorys();
        }
    };

    const deleteCategory = (id) => {
        CategoryDataService.remove(id)
            .then(response => {
                console.log(response.data);
                setCategorys(categorys => categorys.filter(x => x.id !== id));
                alert("Categoria excluída com sucesso!");
            })
            .catch(e => {
                console.log(e);
            });
    }

    return (
        <div className="container">
            <div className="d-flex flex-row-reverse">
                <div className="col-md-3">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Pesquisar..." value={searchName} onChange={onChangeSearchName} />
                        <button className="btn btn-outline-light" type="button" onClick={findByName}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <Link to="/adicionarCategoria" type="button" className="btn btn-outline-light">
                    <FontAwesomeIcon icon={faPlus} />
                    <div>Adicionar</div>
                </Link>

                <Link to="/adicionarProduto" type="button" className="btn btn-outline-light">
                    <FontAwesomeIcon icon={faPlus} />
                    <div>Adicionar Produto</div>
                </Link>
                <br />
                <br />

                {categorys.map((category, index) => (
                    <div className="row" key={index}>
                        <div className="col">
                            <div className="card text-center text-dark bg-white mb-3 rounded-3 shadow-sm">
                                <div className="card-body">
                                    <h4 className="card-title">{category.name}</h4>
                                    <br />
                                    <Link to={`produtos/${category.id}`} type="button" className="btn color text-white m-1">Visualizar Produtos</Link>
                                    <Link to={`/adicionarProduto/${category.id}`} type="button" className="btn color text-white m-1">Adicionar Produto</Link>
                                </div>
                                <div className="card-footer bg-light ml-auto">
                                    <Link className="btn color text-white m-1" to={`/editarCategoria/${category.id}`}>
                                        <FontAwesomeIcon icon={faEdit} />
                                    </Link>
                                    <button type="button" className="btn color text-white m-1" onClick={() => deleteCategory(category.id)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default ListCategory;