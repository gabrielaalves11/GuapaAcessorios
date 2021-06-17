import React, { useState, useEffect } from 'react';
import CategoryDataService from "../../../services/Category/index";
import "bootstrap/dist/css/bootstrap.min.css";

const EditCategory = props => {

    const initialCategoryState = {
        id: null,
        name: ""
    };

    const [currentCategory, setCurrentCategory] = useState(initialCategoryState);

    const getCategory = id => {
        CategoryDataService.get(id)
            .then(response => {
                setCurrentCategory(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getCategory(props.match.params.id);
    }, [props.match.params.id]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setCurrentCategory({ ...currentCategory, [name]: value });
    };

    const updateCategory = () => {
        CategoryDataService.update(currentCategory.id, currentCategory)
            .then(response => {
                console.log(response.data);
                alert("Atualizado com sucesso!");
                props.history.push("/categorias");
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <div>
            {currentCategory ? (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-7 shadow p-3 mb-5 bg-white rounded">
                            <h5>Atualizar Categoria!</h5>
                            <hr />
                            <div className="mb-3">
                                <input type="text" className="form-control" id="name" value={currentCategory.name} onChange={handleInputChange} name="name" required />
                            </div>
                            <div className="d-grid gap-2">
                                <button type="button" className="btn color text-white" onClick={updateCategory}>Salvar</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <br />
                    <p>Não existe categoria para ser atualizada!</p>
                </div>
            )
            }
        </div >
    );
};

export default EditCategory;