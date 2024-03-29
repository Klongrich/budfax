import React from 'react';
import './productCard.css';
import 'tachyons';
import 'w3-css';

class ProductCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			productName: 'TO THE MOON',
			companyName: 'BudFax',
			productImage: 'data:image/jpeg;base64,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',
			companyLogo: "https://i.pinimg.com/736x/33/b8/69/33b869f90619e81763dbf1fccc896d8d--lion-logo-modern-logo.jpg",
			email: '',
			harvestDate: '06-03-2019',
			strand: 'Indica',
			numberOfUnit: '5000',
			unitNumber:'234', /// it would be cool to add this as they are scanned and you get a reward for been the first to scan a cart of a batch
			thc: '99.4',
			thca: '95.4',
			cbd: '20.20',
			rating:''
		}
	};

	render() {
		return (
			<div className="temporary">
				<div className="w3-container">
					<div className="w3-card w3-center card-container">
						<div className="product-card w3-light-grey w3-center">
							<img src={this.state.productImage} class="thumbnail"/>
							<div className="company-info-container">	
								<img className="company-logo" src={this.state.companyLogo}/>
								<div className="company-specifics-container">
									<div className="product-name">{this.state.productName}</div>
									<div className="company-name">{this.state.companyName}</div>
									<div className="rating-stars">RATING STARS</div>
								</div>
							</div>
							<div className="bud-stats-big-container">
								<div className="bud-stats-container">
									<div className="bud-stat-box">THC: {this.state.thc}%</div>
									<div className="bud-stat-box">THCa: {this.state.thca}%</div>
									<div className="bud-stat-box">CBD: {this.state.cbd}%</div>
								</div>
								<div className="bud-stats-container">
									<div className="bud-stat-box">Strand: {this.state.strand}</div>
									<div className="bud-stat-box"><div>Made on: </div>{this.state.harvestDate}</div>
									<div className="bud-stat-box"> {this.state.unitNumber}/{this.state.numberOfUnit}</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		);
	}
}
export default ProductCard;