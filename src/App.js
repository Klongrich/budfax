import React from 'react'
import './App.css'

import GridLayout from "react-grid-layout"

import { slide as Menu } from 'react-burger-menu'


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            productID: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({ productID: event.target.value });
     };

     handleSubmit(event) {
        alert("Product Not Found");
        event.preventDefault();
     };

    render () {

        var layout = [
            {i: 'a', x: 0, y: 0, w: 4, h: 7},
            {i: 'b', x: 6, y: 0, w: 4, h: 3},
            {i: 'c', x: 6, y: 3, w: 4, h: 7}
        ];

        return (
            <div class="weed-container">

              <div class="NavBar">
                <Menu>
                  <div class="work"><a id="home" className="menu-item" href="/">Home</a></div>
                  <a id="about" className="menu-item" href="/block-chain">About</a>
                  <a id="travel" className="menu-item" href="/travel">Products</a>
                  <a id="Company beta" className="menu-item" href="/weedscan">Company Beta</a>
                </Menu>
              </div>

                <div class="weed-header">
                    <h2> Enter Product ID</h2>
                </div>            
                <React.Fragment>
                    <form onSubmit={this.handleSubmit}>
                        <input id="inputbox"
                            type="text"
                            name="productID"
                            value={this.state.id}
                            onChange={this.handleChange}
                        />
                </form>
                <h3 id="YourProduct">Your product ID: {this.state.productID}</h3>
                </React.Fragment> 

                <div class="ProductInfo">

                <GridLayout class="clayout" layout={layout} cols={12} rowHeight={30} width={1000}>  
                    <div key="a">
                        <div class="weedPicture">
                            Put Picture of Weed / cart here
                        </div>
                    </div>
                    
                    <div key="b"> 
                        <div class="weedName">
                             Put Name of Strain / Product here
                        </div>
                    </div>
                    
                    <div key="c"> 
                        <div class="weedInfo">
                            Put description of weed / product here
                        </div>
                    </div>
                </GridLayout>
                </div>
            </div>
        );
    }
}

export default App;