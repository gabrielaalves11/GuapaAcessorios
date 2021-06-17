import React, { useEffect, useState } from 'react';
import ProductDataService from "../../../services/Product/index";
import CategoryDataService from "../../../services/Category/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const AddProduct = props => {
    const initialProductState =
    {
        id: null,
        name: "",
        quantityInPackage: "",
        category: { id: null, name: null }
    };

    const [category, setCategory] = useState([]);
    const [product, setProduct] = useState(initialProductState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChangeProduct = event => {
        const { name, quantityInPackage, category, value } = event.target;
        setProduct({ ...product, [name]: value, [quantityInPackage]: value, [category]: value });
    };

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

    const handleInputChangeCategory = event => {
        const { name, value } = event.target;
        setCategory({ ...category, [name]: value });
    };

    const saveProduct = () => {
        var data = {
            name: product.name,
            quantityInPackage: product.quantityInPackage,
            category: product.category
        };

        ProductDataService.create(data)
            .then(response => {
                setProduct({
                    id: response.data.id,
                    name: response.data.name,
                    quantityInPackage: response.data.quantityInPackage,
                    category: response.data.category
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
            {submitted && category ? (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-7 shadow p-3 mb-5 bg-white rounded">
                            <div className="d-grid gap-2">
                                <h4>Produto adicionado com sucesso!</h4>
                                <hr />
                                <button className="btn color text-white" onClick={newProduct}>Adicionar novo produto</button>
                                <Link className="btn color text-white" to="/categorias">Ir para Categorias</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-7 shadow p-3 mb-5 bg-white rounded">
                            <h5>Adicionar um Produto!</h5>
                            <hr />
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nome do produto:</label>
                                <input type="text" className="form-control" id="name" value={product.name} onChange={handleInputChangeProduct} name="name" placeholder="Digite o nome do produto" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="quantityInPackage" className="form-label">Quantidade:</label>
                                <input type="text" className="form-control" id="quantityInPackage" value={product.quantityInPackage} onChange={handleInputChangeProduct} name="quantityInPackage" placeholder="Digite a quantidade do produto" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="categoryid" className="form-label">Categoria Id:</label>
                                <input type="text" className="form-control" id="categoryid" value={category.id || ""} onChange={handleInputChangeCategory} name="categoryid" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">Categoria:</label>
                                <input type="text" className="form-control" id="category" value={category.name || ""} onChange={handleInputChangeCategory} name="category" required />
                            </div>
                            <div className="d-grid gap-2">
                                <button type="button" className="btn color text-white" onClick={saveProduct}>Salvar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddProduct;