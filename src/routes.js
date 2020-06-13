import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./homepage/Homepage";
import Collection from "./collections/Collection";
import Product from "./ProductPage/Product";
import OrderPage from "./Order/OrderPage";
import OrderSucess from "./Order/OrderSucess";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage}></Route>
        <Route path="/collections" exact component={Collection}></Route>
        <Route path="/product" exact component={Product}></Route>
        <Route path="/buy/productid" exact component={OrderPage}></Route>
        <Route path="/success" exact component={OrderSucess}></Route>
      </Switch>
    </BrowserRouter>
  );
}
