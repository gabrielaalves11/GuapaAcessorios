import React, { useState, useEffect } from "react";
import CategoryDataService from "../../../services/Category/index";
import "bootstrap/dist/css/bootstrap.min.css";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Card, CardGroup, Container } from "react-bootstrap";

const ListCategory = () => {
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

    return (
        <>
            <Container>
                <div>
                    <CardGroup>
                        {categorys.map((category, index1) => (
                            <Card style={{ width: '13rem' }} key={index1}>
                                <Card.Body>
                                    <h5>{category.name}</h5>
                                    <p className="text-secondary">Identificador: {category.id}</p>
                                    <Link to={`comprarProdutos/${category.id}`} type="button" className="btn btn-info m-1">
                                        <FontAwesomeIcon icon={faEye} />
                                    </Link>
                                </Card.Body>
                            </Card>
                        ))}
                    </CardGroup>
                </div>
            </Container>
        </>
    );
}

export default ListCategory;