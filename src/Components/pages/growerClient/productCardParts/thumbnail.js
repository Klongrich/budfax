import React from 'react';
import './thumbnail.css'
import 'tachyons';
import 'w3-css';

function Thumbnail(prop) {
		return (
			<div className='w3-center w3-auto'>
				<img className='w3-image product-thumbnail' alt="Image" src={prop.image}></img>
			</div>
			);
}
export default Thumbnail;