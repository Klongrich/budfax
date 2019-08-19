import React from 'react';
import './productName.css';
import 'w3-css'

function ProductName(prop) {
	return (
		<div className="w3-twothird product-name">
			<div className="name product">{prop.product}</div>
			<div className="name company">{prop.company}</div>
		</div>
	);
}
export default ProductName;