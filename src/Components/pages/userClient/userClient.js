import React from 'react'
import './userClient.css'
import '../../../../node_modules/react-grid-layout/css/styles.css'
import '../../../../node_modules/react-resizable/css/styles.css'

import { WidthProvider, Responsive } from "react-grid-layout";
import { async } from 'q';
const ResponsiveGridLayout = WidthProvider(Responsive);

class userClient extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            productID: '',
            productName: '',
			companyName: '',
			email: '',
			haverstDate: '',
			strand: '',
			numberOfUnits: '',
			thc: '',
			thca: '',
            cbd: '',
            pictureName: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearState = this.clearState(this);
    }

    clearState() {
        return {
            productID: '',
            productName: '',
			companyName: '',
			email: '',
			haverstDate: '',
			strand: '',
			numberOfUnits: '',
			thc: '',
			thca: '',
            cbd: '',
            pictureName: ''
        }
    }

    handleChange(event){
        this.setState({ productID: event.target.value });
     };

     handleSubmit(event) {
        event.preventDefault();
        /*
        fetch(`http://localhost:3010/api/clientData?ID=${encodeURIComponent(this.state.productID)}`)
        .then(response => response.json())
        .then(data => this.setState(data))
        */
        
        this.setState(this.clearState);
        fetch(`http://ec2-18-224-170-67.us-east-2.compute.amazonaws.com:3010/api/clientData?ID=${encodeURIComponent(this.state.productID)}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                            "Content-Type": "application/json",
                },
                },
                ).then(response => {
                if (response.ok) {
                    response.json().then(json => { 
                        this.setState(json);
                    });
                }
            }).catch(error => alert("Product Not Found"));
            console.log(this.state)
     };

     

    render () {

        var lglayout = [ 
            {i: '1', x: 2, y: 0, w: 3, h: 5, static: true},
            {i: '2', x: 6, y: 0, w: 3, h: 2, static: true},
            {i: '3', x: 6, y: 2, w: 3, h: 3, static: true} 
          ];

        var mdlayout = [
            {i: '1', x: 0, y: 0, w: 3, h: 5, static: true},
            {i: '2', x: 0, y: 0, w: 3, h: 2, static: true},
            {i: '3', x: 3, y: 5, w: 3, h: 3, static: true} 
        ];

        var smlayout = [
            {i: '1', x: 0, y: 0, w: 2, h: 5, static: true},
            {i: '2', x: 3, y: 0, w: 2, h: 2, static: true},
            {i: '3', x: 3, y: 5, w: 2, h: 3, static: true} 
        ];

        var xslayout = [
            {i: '1', x: 0, y: 0, w: 2, h: 5, static: true},
            {i: '2', x: 3, y: 0, w: 2, h: 2, static: true},
            {i: '3', x: 3, y: 5, w: 2, h: 3, static: true} 
        ];

        var layouts = {lg: lglayout, md: mdlayout, sm: smlayout, xs: xslayout}

        return (
            <div class="weed-container">
                <div class="weed-header">
                    <h2> Enter 
                        Product ID</h2>
                </div>

                
                    <form   onSubmit={this.handleSubmit}>
                        <input class="bar"
                            type="text"
                            name="productID"
                            value={this.state.id}
                            onChange={this.handleChange}
                        />
                </form>
                <h3 id="YourProduct">Your product ID: {this.state.productID}</h3>
             

                
                
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
                                 Name of Strain
                             <p>{this.state.productName}</p>
                        </div>
                    </div>
                    
                    <div key="3"> 
                        <div class="weedInfo">
                            <div class="one">
                                <p>Company: {this.state.companyName}</p>
                                <p>Email: {this.state.email}</p>
                                <p>Strand: {this.state.strand}</p>
                                <p>Haverst Date: {this.state.haverstDate}</p>
                            </div>

                            <div class="two">
                                <p>Units: {this.state.numberOfUnits}</p>
                                <p>THC: {this.state.thc}</p>
                                <p>THCa: {this.state.thca}</p>
                                <p>CBD: {this.state.cbd}</p>
                            </div>

                        </div>
                    </div>
                </ResponsiveGridLayout>
                </div>
                
                
            
        )

    }
}
export default userClient;