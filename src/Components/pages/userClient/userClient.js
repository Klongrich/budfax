import React from 'react'
import './userClient.css'
import '../../../../node_modules/react-grid-layout/css/styles.css'
import '../../../../node_modules/react-resizable/css/styles.css'

import { WidthProvider, Responsive } from "react-grid-layout";
const ResponsiveGridLayout = WidthProvider(Responsive);

class userClient extends React.Component{

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

        var lglayout = [ 
            {i: '1', x: 2, y: 0, w: 3, h: 5},
            {i: '2', x: 6, y: 0, w: 3, h: 2},
            {i: '3', x: 6, y: 5, w: 3, h: 3} 
          ];

        var mdlayout = [
            {i: '1', x: 0, y: 0, w: 3, h: 5},
            {i: '2', x: 0, y: 0, w: 3, h: 2},
            {i: '3', x: 3, y: 5, w: 3, h: 3} 
        ];

        var smlayout = [
            {i: '1', x: 0, y: 0, w: 2, h: 5},
            {i: '2', x: 3, y: 0, w: 2, h: 2},
            {i: '3', x: 3, y: 5, w: 2, h: 3} 
        ];

        var xslayout = [
            {i: '1', x: 0, y: 0, w: 2, h: 5},
            {i: '2', x: 3, y: 0, w: 2, h: 2},
            {i: '3', x: 3, y: 5, w: 2, h: 3} 
        ];

        var layouts = {lg: lglayout, md: mdlayout, sm: smlayout, xs: xslayout}

        return (
            <div class="weed-container">
                <div class="weed-header">
                    <h2> Enter 
                        Product ID</h2>
                </div>

                <React.Fragment>
                    <form   onSubmit={this.handleSubmit}>
                        <input class="bar"
                            type="text"
                            name="productID"
                            value={this.state.id}
                            onChange={this.handleChange}
                        />
                </form>
                <h3 id="YourProduct">Your product ID: {this.state.productID}</h3>
                </React.Fragment> 

                

                <ResponsiveGridLayout
                    className="layout"
                    layouts={layouts}
                    breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                    cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                    rowHeight={50}
                >
                    <div key="1">
                        <div class="weedPicture">
                            Put Picture of Weed / cart here
                        </div>
                    </div>
                    
                    <div key="2"> 
                        <div class="weedName">
                             Put Name of Strain / Product here
                        </div>
                    </div>
                    
                    <div key="3"> 
                        <div class="weedInfo">
                            Put description of weed / product here
                        </div>
                    </div>
                </ResponsiveGridLayout>
                
                </div>
            
        )

    }
}

export default userClient;