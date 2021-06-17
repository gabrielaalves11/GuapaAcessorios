import React, { useState, useEffect } from "react";
import ProductDataService from "../../../services/Product/index";
import CategoryDataService from "../../../services/Category/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ListProduct = props => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);

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

    const getCategory = id => {
        CategoryDataService.get(id)
            .then(response => {
                setCategory(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getCategory(props.match.params.id);
    }, [props.match.params.id]);

    const deleteProduct = (id) => {
        ProductDataService.remove(id)
            .then(response => {
                console.log(response.data);
                setProducts(products => products.filter(x => x.id !== id));
                alert("Produto excluído com sucesso!");
            })
            .catch(e => {
                console.log(e);
            });
    }

    return (
        <div className="container">
            <div>
                {/** <Link to="/adicionarProduto" type="button" className="btn btn-outline-light">
                    <FontAwesomeIcon icon={faPlus} />
                    <div>Adicionar</div>
                </Link> */}
                <h4 className="text-white">{category.name}</h4>
                <br />
                <br />

                <div className="row">
                    <div className="col">
                        <div className="card text-center text-dark bg-white mb-3 rounded-3 shadow-sm">
                            <div className="card-body">
                                <h4 className="card-title">{products.name}</h4>
                                <h4>Quantidade: {products.quantityInPackage}</h4>
                                <h4>Categoria: {category.name}</h4>
                                <br />
                            </div>
                            <div className="card-footer bg-light ml-auto">
                                <Link className="btn color text-white m-1" to={`/editarProduto/${products.id}`}>
                                    <FontAwesomeIcon icon={faEdit} />
                                </Link>
                                <button type="button" className="btn color text-white m-1" onClick={() => deleteProduct(products.id)}>
                                    <FontAwesomeIcon icon={faTrash} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ListProduct;