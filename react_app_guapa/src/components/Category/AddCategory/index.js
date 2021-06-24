import React, { useState } from 'react';
import CategoryDataService from "../../../services/Category/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

const AddCategory = () => {
    const initialCategoryState =
    {
        id: null,
        name: ""
    };
    
    const [category, setCategory] = useState(initialCategoryState);
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCategory({ ...category, [name]: value });
    };

    const saveCategory = () => {
        var data = {
            name: category.name
        };

        CategoryDataService.create(data)
            .then(response => {
                setCategory({
                    id: response.data.id,
                    name: response.data.name
                });
                setSubmitted(true);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const newCategory = () => {
        setCategory(initialCategoryState);
        setSubmitted(false);
    };

    return (
        <div className="submit-form">
            {submitted ? (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-7 shadow p-3 mb-5 bg-white rounded">
                            <div className="d-grid gap-2">
                                <h4>Categoria adicionada com sucesso!</h4>
                                <hr />
                                <button type="button" className="btn btn-info btn-lg btn-block" onClick={newCategory}>Adicionar nova categoria</button>
                            <Link type="button" className="btn btn-info btn-lg btn-block" to="/catálogo">Ir para Catálogo</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-7 shadow p-3 mb-5 bg-white rounded">
                            <h5 className="text-center">Adicionar uma Categoria!</h5>
                            <hr />
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nome do categoria:</label>
                                <input type="text" className="form-control" id="name" value={category.name} onChange={handleInputChange} name="name" placeholder="Digite o nome da categoria" required />
                            </div>
                            <hr/>
                            <div className="d-grid gap-2">
                                <button type="button" className="btn btn-info text-white" onClick={saveCategory}>Salvar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddCategory;