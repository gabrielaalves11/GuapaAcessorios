import React, { useState, useEffect } from "react";
import ProductDataService from "../../../services/Product/index";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import teste from "../../../imgs/teste.jpg";
import ListCategory from "../../Category/ListCategory/index";
import { Card, CardGroup } from "react-bootstrap";

const PurchaseProduct = () => {
    const [products, setProducts] = useState([]);
    const [searchName, setSearchName] = useState("");

    useEffect(() => {
        retrieveProducts();
    }, []);

    const onChangeSearchName = e => {
        const searchName = e.target.value;
        setSearchName(searchName);
    };

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

    const findByName = () => {
        if (searchName !== '') {
            ProductDataService.findByName(searchName)
                .then(response => {
                    setProducts(response.data);
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        } else {
            retrieveProducts();
        }
    };

    return (
        <div className="container">
            <ListCategory />
            <br />
            <div className="d-flex flex-row-reverse">
                <div className="col-md-3">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Pesquisar..." value={searchName} onChange={onChangeSearchName} />
                        <button className="btn btn-outline-info" type="button" onClick={findByName}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <CardGroup>
                    {products.map((product, index) => (
                        <Card style={{ width: '18rem' }} key={index}>
                            <Card.Img variant="top" src={teste} alt="" />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    Quantidade: {product.quantityInPackage}
                                </Card.Text>
                                <Card.Text className="text-info">R${product.price}</Card.Text>

                                <Link className="btn btn-info text-white" to="/carrinho">
                                    Comprar
                                </Link>
                            </Card.Body>
                        </Card>
                    ))}
                </CardGroup>
            </div>
        </div >
    );
}

export default PurchaseProduct;