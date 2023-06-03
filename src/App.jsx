import React from "react";
import Header from "./components/header";
import About from "./components/about";
import Home from "./components/home";
import Product from "./components/product";
import { Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom";

export default function App() {
   return (
      <>
         <Switch>
            <Route exact  path = "/" >
               <Redirect to="/home"/>
            </Route>
            <Route path="/home">
               <Header />
               <Home />
            </Route>
            <Route path="/about">
               <Header />
               <About />
            </Route>
            <Route path="/product">
               <Header />
               <Product />
            </Route>
            <Route path="*">
               <h1>404 Not found</h1>
            </Route>
         </Switch>
      </>
   );
}
