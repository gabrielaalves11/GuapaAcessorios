import React, { useState, useEffect } from "react";
import ProductDataService from "../../../services/Product/index";
import CategoryDataService from "../../../services/Category/index";
import { Link } from "react-router-dom";
import teste from "../../../imgs/teste.jpg";
import { Card, CardGroup, Container } from "react-bootstrap";

const ProductByCategory = props => {
    const [/* products */, setProducts] = useState([]);
    const [category, setCategory] = useState([]);

    const getProduct = id => {
        ProductDataService.get(id)
            .then(response => {
                setProducts(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getProduct(props.match.params.id);
    }, [props.match.params.id]);

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

    return (
        <>
            <Container>
                <CardGroup>
                    {category.products && category.products.map((product,index) => (
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
            </Container>
        </>
    );
}

export default ProductByCategory;