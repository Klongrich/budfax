import React from 'react'
import './App.css'

import GrowerClient from './pages/growerClient/growerClient'
import UserClient from './pages/userClient/userClient'

class App extends React.Component{
    
    render () {
        return (
            <UserClient />
        );
    }
}

export default App;