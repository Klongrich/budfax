import React from 'react'
import './App.css'

import UserClient from './pages/userClient/userClient'
import NavBar from './headerComponents/NavBar'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Datasubmissiontest from  '../test/dataSubmissionTest'
import dataEntryTest from './pages/growerClient/growerEntryForum'
import growerEnteryScript from '../test/growerEternyScript'
import ProductCard from './pages/growerClient/productCard'
import test30k from '../test/filll30000'
import landingPage from './pages/landingPage/landingPage'
import userSignUpTest from './pages/userSignUp/userSignUp'


class App extends React.Component{

        render () {
          const testy = "penis";
          return(
            
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path="/" exact component={UserClient}/>
                    <Route path="/datasubmissiontest" exact component={Datasubmissiontest} />
                    <Route path="/dataEntryTest" exact component={dataEntryTest}/>>
                    <Route path="/growerEnteryScript" exact component={growerEnteryScript}/>
                    <Route path="/ProductCard" exact component={ProductCard}/>
                    <Route path="/landingPage" exact component={landingPage} />
                    <Route path="/userSignUpTest" exact component={userSignUpTest} />
                    <Route path="/fill30000" exact component={test30k}/>
                </Switch>
            </BrowserRouter>              
          );
       }        
}

export default App;