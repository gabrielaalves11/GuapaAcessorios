import React, { useState, useEffect } from "react";
import ProductDataService from "../../../services/Product/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { faEdit, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import teste from "../../../imgs/teste.jpg";
import TableCategory from "../../Category/TableCategory";

const Catalog = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        retrieveProducts();
    }, []);

    const retrieveProducts = () => {
        ProductDataService.getAll()
            .then(response => {
                setProducts(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

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
            <div className="m-3">
                <Link to="/adicionarProduto" type="button" className="btn btn-info text-white">
                    <FontAwesomeIcon icon={faPlus} />
                    <span>  Adicionar Produto</span>
                </Link>
                <Link to="/adicionarCategoria" type="button" className="btn btn-info text-white m-2">
                    <FontAwesomeIcon icon={faPlus} />
                    <span>  Adicionar Categoria</span>
                </Link>
            </div>
            <TableCategory />
            <hr />
            <div className="row justify-content-center">
                <div className="col shadow p-3 mb-5 bg-white rounded">
                    <table className="table table-hover text-secondary">
                        <thead>
                            <tr>
                                <th scope="col">Imagem</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Quantidade</th>
                                <th scope="col">Preço</th>
                                <th scope="col">Categoria</th>
                                <th scope="col">Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((product, index) => (
                                <tr key={index}>
                                    <td className="col-xs-2 col-sm-2 col-md-2 col-lg-2"><img src={teste} width="100%" alt="" /></td>
                                    <td>{product.name}</td>
                                    <td>{product.quantityInPackage}</td>
                                    <td>{product.price}</td>
                                    <td>{product.categoryId}</td>
                                    <td>
                                        <Link className="btn btn-secondary m-1" to={`/editarProduto/${product.id}`}>
                                            <FontAwesomeIcon icon={faEdit} />
                                        </Link>
                                        <button type="button" className="btn btn-secondary m-1" onClick={() => deleteProduct(product.id)}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Catalog;