import React from 'react'
import './App.css'

import GrowerClient from './pages/growerClient/growerClient'
import UserClient from './pages/userClient/userClient'
import NavBar from './headerComponents/NavBar'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Datasubmissiontest from  '../test/dataSubmissionTest'
import growerClient from './pages/growerClient/growerClient'
import dataEntryTest from './pages/growerClient/dataEntryTest'



class App extends React.Component{

        render () {
          const testy = "penis";
          return(
            
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={UserClient}/>
                    <Route path="/growerclient" exact component={growerClient}/>
                    <Route  path="/datasubmissiontest" exact component={Datasubmissiontest} />
                    <Route path="/dataEntryTest" exact component={dataEntryTest}/>
                </Switch>
            </BrowserRouter>              
          );
       }        
}

export default App;