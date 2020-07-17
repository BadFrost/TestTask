import React from "react";
import { hot } from "react-hot-loader";
import { Switch, Route } from "react-router-dom";
import { Main } from "../components/Main";
import { UserMain } from '../components/UserMain';
import { Catalog } from "../components/Catalog";
import { UserCatalog } from '../components/UserCatalog';
import { CatalogAll } from '../components/CatalogAll';
import { UserCatalogAll } from '../components/UserCatalogAll';
import { AddItems } from '../components/AddItems';
import "./App.css";

let App = () => {
    const [role, setRole] = React.useState('Admin');
    if (role === 'Admin') {
        return (
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/catalog" render={() => (
                    <Catalog />
                )} />
                <Route path="/addItems" render={() => (
                    <AddItems />
                )} />
                <Route path="/catalogAll" render={() => (
                    <CatalogAll />
                )} />
                <Route component={Main} />
            </Switch>
        )
    }
    else if (role === 'User') {
        return (
            <Switch>
                <Route exact path="/" component={UserMain} />
                <Route path="/catalog" render={() => (
                    <UserCatalog />
                )} />
                <Route path="/catalogAll" render={() => (
                    <UserCatalogAll />
                )} />
                <Route component={UserMain} />
            </Switch>
        )
    };
};

export default hot(module)(App);