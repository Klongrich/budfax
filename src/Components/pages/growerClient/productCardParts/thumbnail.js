import React from 'react';
import './thumbnail.css'
import 'tachyons';

function Thumbnail(prop) {
		return (
			<div id='product-card-thumbnail tc'>
				<img id='product-card-image' alt="Image" src={prop.image}></img>
			</div>
			);
}
export default Thumbnail;