import React, { useState, useEffect } from 'react';
import ProductDataService from "../../../services/Product/index";
import "bootstrap/dist/css/bootstrap.min.css";

const EditProduct = props => {

    const initialProductState = {
        id: null,
        name: "",
        quantityInPackage: "",
        price: "",
        categoryId: ""
    };

    const [currentProduct, setCurrentProduct] = useState(initialProductState);

    const getProduct = id => {
        ProductDataService.get(id)
            .then(response => {
                setCurrentProduct(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getProduct(props.match.params.id);
    }, [props.match.params.id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentProduct({ ...currentProduct, [name]: value });
    };

    const updateProduct = () => {
        ProductDataService.update(currentProduct.id, currentProduct)
            .then(response => {
                console.log(response.data);
                alert("Atualizado com sucesso!");
                props.history.push("/catálogo");
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
            {currentProduct ? (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-7 shadow p-3 mb-5 bg-white rounded">
                            <h5 className="text-center">Atualizar Produto!</h5>
                            <hr />
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nome do Produto:</label>
                                <input type="text" className="form-control" id="name" value={currentProduct.name} onChange={handleInputChange} name="name" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="quantityInPackage" className="form-label">Quantidade:</label>
                                <input type="text" className="form-control" id="quantityInPackage" value={currentProduct.quantityInPackage} onChange={handleInputChange} name="quantityInPackage" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Preço em R$:</label>
                                <input type="text" className="form-control" id="price" value={currentProduct.price} onChange={handleInputChange} name="price" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="categoryId" className="form-label">Identicação da Categoria:</label>
                                <input type="text" className="form-control" id="categoryId" value={currentProduct.categoryId} onChange={handleInputChange} name="categoryId" required />
                            </div>
                            <hr />
                            <div className="d-grid gap-2">
                                <button type="button" className="btn btn-info text-white" onClick={updateProduct}>Salvar</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <br />
                    <p>Não existe produto para ser atualizado!</p>
                </div>
            )
            }
        </div >
    );
};

export default EditProduct;