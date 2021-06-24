import React from 'react';
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Login } from "../components/User/index";
import { EditProduct, AddProduct, Catalog, PurchaseProduct, ProductByCategory } from "../components/Product/index";
import { AddCategory } from "../components/Category/index";
import Carrinho from "../components/Carrinho/index";

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <>
                    <Header />
                    
                    <Route exact path="/adicionarCategoria" component={AddCategory} />

                    <Route exact path="/carrinho" component={Carrinho} />

                    <Route exact path="/comprarProdutos/:id" component={ProductByCategory} />
                    <Route exact path="/comprarProdutos" component={PurchaseProduct} />
                    <Route exact path="/adicionarProduto" component={AddProduct} />
                    <Route exact path="/editarProduto/:id" component={EditProduct} />
                    <Route exact path="/catálogo" component={Catalog} />

                    <Footer />
                </>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;