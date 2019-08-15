import React from 'react';
import GridLayout from 'react-grid-layout';
import "tachyons";

class productCard extends React.Component {
	render() {

		var layoutBudStats = [
			{i: 'a', x: 0, y: 0, w: 4, h: 2, static: true},
            {i: 'b', x: 0, y: 0, w: 4, h: 2, static: true},
            {i: 'c', x: 0, y: 0, w: 4, h: 2, static: true},
            {i: 'd', x: 0, y: 0, w: 4, h: 2, static: true},
            {i: 'e', x: 0, y: 0, w: 4, h: 2, static: true},
            {i: 'f', x: 0, y: 0, w: 4, h: 2, static: true}

		];
		return (
				<div className="product-card">
					<div className="product-card-thumbnail">
						<img alt="thumbnail" src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiI1OKFs4XkAhXE1VkKHSjeC8QQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.byrdseed.com%2Fcalvin%2F&psig=AOvVaw0sKpel4V56gZFaqJaZT10i&ust=1565976074869401"/>
					</div>
					<div className="product-info">
						<div className="product-name">
							<h1>Product Name</h1>
						</div>
						<div className="product-maker">
							<h3>Product Maker</h3>
						</div>
						<div className="product-rating">
							<h2>******</h2>
						</div>
						<div className="bud-type">
							<h4>Sativa/Indica/Hybrid</h4>
						</div>
					</div>
					<div className="product-stats">
						<GridLayout class="bud-stats-layout" layout={layoutBudStats} col={2} rowHeight={10} width={40}>
							<div key="a" className="bud-stats">
								THCa
							</div>
							<div key="b" className="bud-stats">
								THC
							</div>
							<div key="c" className="bud-stats">
								CBD
							</div>
							<div key="d" className="bud-stats">
								Havest Date
							</div>
							<div key="e" className="bud-stats">
								Havest Location
							</div>
							<div key="f" className="bud-stats">
								Number of Units
							</div>

						</GridLayout>

					</div>

					

				</div>
		)
	}


}