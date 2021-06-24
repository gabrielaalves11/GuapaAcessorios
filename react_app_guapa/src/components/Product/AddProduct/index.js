import React, { useState } from 'react';
import ProductDataService from "../../../services/Product/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const AddProduct = () => {
    const initialProductState =
    {
        id: null,
        name: "",
        quantityInPackage: "",
        price: "",
        categoryId: ""
    };

    const [product, setProduct] = useState(initialProductState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setProduct({ ...product, [name]: value });
    };

    const saveProduct = () => {
        var data = {
            name: product.name,
            quantityInPackage: product.quantityInPackage,
            price: product.price,
            categoryId: product.categoryId
        };

        ProductDataService.create(data)
            .then(response => {
                setProduct({
                    id: response.data.id,
                    name: response.data.name,
                    quantityInPackage: response.data.quantityInPackage,
                    price: response.data.price,
                    categoryId: response.data.categoryId
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const newProduct = () => {
        setProduct(initialProductState);
        setSubmitted(false);
    };

    return (
        <div className="submit-form">
            {submitted ? (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-7 shadow p-3 mb-5 bg-white rounded">
                            <h4>Produto adicionado com sucesso!</h4>
                            <hr />
                            <button type="button" className="btn btn-info btn-lg btn-block" onClick={newProduct}>Adicionar novo produto</button>
                            <Link type="button" className="btn btn-info btn-lg btn-block" to="/catálogo">Ir para Catálogo</Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-7 shadow p-3 mb-5 bg-white rounded">
                            <h5 className="text-center">Adicionar um Produto!</h5>
                            <hr />
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nome do produto:</label>
                                <input type="text" className="form-control" id="name" value={product.name} onChange={handleInputChange} name="name" placeholder="Digite o nome do produto" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="quantityInPackage" className="form-label">Quantidade:</label>
                                <input type="text" className="form-control" id="quantityInPackage" value={product.quantityInPackage} onChange={handleInputChange} name="quantityInPackage" placeholder="Digite a quantidade do produto" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Preço em R$:</label>
                                <input type="text" className="form-control" id="price" value={product.price} onChange={handleInputChange} name="price" placeholder="Digite o preço do produto" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="categoryId" className="form-label">Identificação da Categoria:</label>
                                <input type="text" className="form-control" id="categoryId" value={product.categoryId} onChange={handleInputChange} name="categoryId" placeholder="Digite a identificação da categoria" required />
                            </div>
                            <hr />
                            <div className="d-grid gap-2">
                                <button type="button" className="btn btn-info text-white" onClick={saveProduct}>Salvar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddProduct;