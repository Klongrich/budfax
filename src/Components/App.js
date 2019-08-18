import React from 'react'
import './App.css'

import GrowerClient from './pages/growerClient/growerClient'
import UserClient from './pages/userClient/userClient'
import NavBar from './headerComponents/NavBar'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Datasubmissiontest from  '../test/dataSubmissionTest'
import growerClient from './pages/growerClient/growerClient'
import dataEntryTest from './pages/growerClient/dataEntryTest'
import growerEnteryScript from '../test/growerEternyScript'
import ProductCard from './pages/growerClient/productCard'



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
                    <Route path="/dataEntryTest" exact component={dataEntryTest}/>>
                    <Route path="/growerEnteryScript" exact component={growerEnteryScript}/>
                    <Route path="/ProductCard" exact component={ProductCard}/>
                </Switch>
            </BrowserRouter>              
          );
       }        
}

export default App;