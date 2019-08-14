import React from 'react'
import './App.css'

import GrowerClient from './pages/growerClient/growerClient'
import UserClient from './pages/userClient/userClient'
import {BrowserRouter, Route, Switch} from "react-router-dom"

class App extends React.Component{
    
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={UserClient}/>
                    <Route path="/growerClient" exact component={GrowerClient}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;