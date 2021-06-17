import React from 'react';
import Header from "../components/Header/index";
import Footer from "../components/Footer/index";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from "../components/User/Login/index";
import { EditCategory, AddCategory, ListCategory } from "../components/Category/index";
import { EditProduct, AddProduct, ListProduct } from "../components/Product/index";

function Routes() {
    return (
        <BrowserRouter>
            <div className="color">
                <Header />

                <Switch>
                    <Route exact path={["/", "/user"]} component={Login} />
                    
                    <Route exact path="/categorias" component={ListCategory} />
                    <Route exact path="/adicionarCategoria" component={AddCategory} />
                    <Route exact path="/editarCategoria/:id" component={EditCategory} />

                    <Route exact path="/produtos/:id" component={ListProduct} />
                    <Route exact path="/adicionarProduto/:id" component={AddProduct} />
                    <Route exact path="/editarProduto/:id" component={EditProduct} />
                </Switch>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default Routes;