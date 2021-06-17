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
                            <div class="d-grid gap-2">
                                <h4>Categoria criada com sucesso!</h4>
                                <hr />
                                <button className="btn color text-white" onClick={newCategory}>Criar nova Categoria</button>
                                <Link className="btn color text-white" to="/categorias">Ir para Categorias</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-7 shadow p-3 mb-5 bg-white rounded">
                            <h5>Criar uma Categoria!</h5>
                            <hr />
                            <div className="mb-3">
                                <input type="text" className="form-control" id="name" value={category.name} onChange={handleInputChange} name="name" placeholder="Digite o nome para uma categoria" required />
                            </div>
                            <div className="d-grid gap-2">
                                <button type="button" className="btn color text-white" onClick={saveCategory}>Salvar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddCategory;