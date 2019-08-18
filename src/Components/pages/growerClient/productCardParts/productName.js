import React from 'react';
import './productName.css';

function ProductName(prop) {
	return (
		<div>
			<div className="name product">{prop.product}</div>
			<div className="name company">{prop.company}</div>
		</div>
	);
}
export default ProductName;