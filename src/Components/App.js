import React from 'react'
import './App.css'

import GrowerClient from './pages/growerClient/growerClient'
import UserClient from './pages/userClient/userClient'
import NavBar from './headerComponents/NavBar'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Datasubmissiontest from  '../test/dataSubmissionTest'
import growerClient from './pages/growerClient/growerClient'



class App extends React.Component{

        render () {
          return(
            
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={UserClient}/>
                    <Route path="/growerclient" exact component={growerClient}/>
                    <Route  path="/datasubmissiontest" exact component={Datasubmissiontest} />
                </Switch>
            </BrowserRouter>
                
          );
        }        
}

export default App;