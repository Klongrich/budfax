import React from 'react';
import GridLayout from 'react-grid-layout';
import './growerClient.css';
import "tachyons";

class growerClient extends React.Component{
    render () {

    	var layout = [
            {i: 'a', x: 0, y: 0, w: 4, h: 2, static: true},
            {i: 'b', x: 6, y: 0, w: 4, h: 3, static: true},
            {i: 'c', x: 6, y: 3, w: 4, h: 7, static: true}
        ];

        var productDetailsLayout = [
            {i: 'active', x: 0, y: 0, w: 4, h: 4, static: true},
            {i: 'inactive', x: 0, y: 0, w: 4, h: 4, static: true},
        ];

        return (
                <div className="grower-container">
                	<div className="grower-header tc">
                     	Grower Client
                    </div>
                    <GridLayout class="clayout" layout={layout} cols={1} rowHeight={30} width={1000}>
                    	<div key="a" className="growerInfo">
                    		<div id="name" className="growerDetails">
                    			Name: Bob Ross
                    		</div>
                   			<div id="location" className="growerDetails">
                   				Location: The Land Down Under
                   			</div>
                   			<div id="website" className="growerDetails">
                   				Website: DankVape.lol
                   			</div>
                		</div>

                		<div key="b">
                			<div className="productDetails">
                				<GridLayout class="productlayout" layout={productDetailsLayout} cols={1} rowHeight={10} width={1000}>
                					<div key="active">
	                					<div className="activeProducts">
	                						Actice Products Component Go here in slider
	                					</div>
	                				</div>
	                				<div key="inactive">
	                					<div className="inactiveProducts">
	                						Inactive Products Component Go here in slider
	                					</div>
	                				</div>
                				</GridLayout>
                				<div key="c">
                					<div className="newProductRegistration">
                						New Product registration component
                						<div className="productName">
                							newProduct name entry here
                						</div>
                						<div className="productTpe">
                							newProduct type entry here
                						</div>
                						<div className="newProductQuanity">
                							newProduct batch size here
                						</div>
                						<div className="newProductPicture">
                							newProduct picture entry here
                						</div>
                						<div className="newProductFarmLocation">
                							newProduct farm location entry here
                						</div>
                						<div className="newProductLabResults">
                							newProduct lab results go here
                						</div>
                					</div>
                				</div>
                			</div>
                		</div>

                	</GridLayout>
                	</div>
		)
    }

}

export default growerClient;