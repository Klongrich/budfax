import React from "react";

import UserClient from "./pages/userClient/userClient";
import NavBar from "./headerComponents/NavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Datasubmissiontest from "../test/dataSubmissionTest";
import dataEntryTest from "./pages/growerClient/growerEntryForum";
import growerEnteryScript from "../test/growerEternyScript";
import ProductCard from "./pages/growerClient/productCard";
import test30k from "../test/filll30000";
import LandingPage from "../Pages/landingPage_newDesign";
import userSignUpTest from "./pages/userSignUp/userSignUp";

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={LandingPage} />
                    <Route
                        path="/datasubmissiontest"
                        exact
                        component={Datasubmissiontest}
                    />
                    <Route
                        path="/dataEntryTest"
                        exact
                        component={dataEntryTest}
                    />
                    >
                    <Route
                        path="/growerEnteryScript"
                        exact
                        component={growerEnteryScript}
                    />
                    <Route path="/ProductCard" exact component={ProductCard} />
                    <Route path="/landingPage" exact component={LandingPage} />
                    <Route
                        path="/userSignUpTest"
                        exact
                        component={userSignUpTest}
                    />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
