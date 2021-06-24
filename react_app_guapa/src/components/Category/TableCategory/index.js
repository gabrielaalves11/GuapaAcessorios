import React, { useState, useEffect } from "react";
import CategoryDataService from "../../../services/Category/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TableCategory = () => {
    const [categorys, setCategorys] = useState([]);

    useEffect(() => {
        retrieveCategorys();
    }, []);

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
            <div className="row justify-content-center">
                <div className="col shadow p-3 mb-5 bg-white rounded">
                    <table className="table table-hover text-secondary">
                        <thead>
                            <tr>
                                <th scope="col">Identificação</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Excluir</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categorys.map((category, index) => (
                                <tr key={index}>
                                    <td>{category.id}</td>
                                    <td>{category.name}</td>
                                    <td>
                                        <button type="button" className="btn btn-secondary m-1" onClick={() => deleteCategory(category.id)}>
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

export default TableCategory;