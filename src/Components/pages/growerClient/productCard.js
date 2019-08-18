import React from 'react';
import Thumbnail from './productCardParts/thumbnail';
import ProductName from './productCardParts/productName';
import StarRatings from 'react-star-ratings';
import './productCard.css';
import 'tachyons';

class ProductCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			productName: 'OG Kush',
			companyName: 'Dank Vapes',
			productImage: 'https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1511831350000/photosp/ig-299331017494545128_12950303/stock-photo-macro-hairy-frosty-bomb-trichomes-highsociety-ig-299331017494545128_12950303.jpg',
			email: '',
			havestDate: '',
			strand: '',
			numberOfUnit: '',
			thc: '',
			thca: '',
			cbd: '',
			rating:''
		}
	};

	changeRating( newRating, name ) {
      this.setState({
        rating: newRating
      });
    }

	render() {
		return (
			<div className="product-card-container tc">
				<Thumbnail image={this.state.productImage} />
				<ProductName 
					product={this.state.productName}
					company={this.state.companyName}
				/>
		
			</div>

		);
	}
}
export default ProductCard;