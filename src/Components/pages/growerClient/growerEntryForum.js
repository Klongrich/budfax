import React from 'react';
import './growerEntryForum.css';

class dataEntryTest extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			productName: '',
			companyName: '',
			email: '',
			harvestDate: '',
			strand: '',
			numberOfUnit: '',
			thc: '',
			thca: '',
			cbd: '',
			uniqueID: '410'
		};

		this.handleChange1 = this.handleChange1.bind(this);
		this.handleChange2 = this.handleChange2.bind(this);
		this.handleChange3 = this.handleChange3.bind(this);
		this.handleChange4 = this.handleChange4.bind(this);
		this.handleChange5 = this.handleChange5.bind(this);
		this.handleChange6 = this.handleChange6.bind(this);
		this.handleChange7 = this.handleChange7.bind(this);
		this.handleChange8 = this.handleChange8.bind(this);
		this.handleChange9 = this.handleChange9.bind(this);
		this.handleChange10 = this.handleChange10.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange1(event) {
		this.setState({ productName: event.target.value });
	}

	handleChange2(event) {
		this.setState({ companyName: event.target.value });
	}

	handleChange3(event) {
		this.setState({ harvestDate: event.target.value });
	}

	handleChange4(event) {
		this.setState({ strand: event.target.value });
	}

	handleChange5(event) {
		this.setState({ numberOfUnit: event.target.value });
	}

	handleChange6(event) {
		this.setState({ thc: event.target.value });
	}

	handleChange7(event) {
		this.setState({ thca: event.target.value });
	}

	handleChange8(event) {
		
		this.setState({ cbd: event.target.value });
	}

	handleChange9(event) {
		this.setState({ email: event.target.value });

	}

	handleChange10(event) {
		this.setState({ productImage: event.target.value });
	}

	handleSubmit(event) {
        event.preventDefault();
		fetch(`/api/growerData?productName=${encodeURIComponent(this.state.productName)}\
								&companyName=${encodeURIComponent(this.state.companyName)}\
								&email=${encodeURIComponent(this.state.email)}\
								&haverstDate=${encodeURIComponent(this.state.harvestDate)}\
								&strand=${encodeURIComponent(this.state.strand)}\
								&numberofUnits=${encodeURIComponent(this.state.numberOfUnit)}\
								&thc=${encodeURIComponent(this.state.thc)}\
								&thca=${encodeURIComponent(this.state.thca)}\
								&cbd=${encodeURIComponent(this.state.cbd)}\
								&uniqueID=${encodeURIComponent(this.state.uniqueID)}`)
        .then(response => response.json())
		.then(state => this.setState(state))
		
		console.log(this.state);
    }

    render () {
        return (
            <div className="grower-data-entry-container">
	            <form className="grower-data-entry-form" onSubmit={this.handleSubmit}>
	                <label className="data-entry-label" htmlFor="productName">Enter your product name: </label>
	                <input
	                class="data-entry-input"
	                id="productName"
	                type="text"
	                value={this.state.productName}
	                onChange={this.handleChange1}
	                />
	                <label className="data-entry-label" htmlFor="companyName">Enter your company name: </label>
	                <input
	                class="data-entry-input"
	                id="companyName"
	                type="text"
	                value={this.state.companyName}
	                onChange={this.handleChange2}
	                />
	                <label clasName="data-entry-label" htmlFor="productImage">Attach an image: </label>
	                <input
	                class="data-entry-input"
	                id="productImage"
	                type="file"
	                value={this.state.productImage}
	                onChange={this.handleChange10}
	                />
	                <label className="data-entry-label" htmlFor="havestDate">Enter your havest date: </label>
	                <input
	                class="data-entry-input"
	                id="harvestDate"
	                type="date"
	                value={this.state.harvestDate}
	                onChange={this.handleChange3}
	                />
	                <label className="data-entry-label" htmlFor="strand">Enter your strand: </label>
	                <input
	                class="data-entry-input"
	                id="strand"
	                type="text"
	                value={this.state.strand}
	                onChange={this.handleChange4}
	                />
	                <label className="data-entry-label" htmlFor="numberOfUnit">Enter your number of units: </label>
	                <input
	                class="data-entry-input"
	                id="numberOfUnit"
	                min="0"
	                type="number"
	                value={this.state.numberOfUnit}
	                onChange={this.handleChange5}
	                />
	                <label className="data-entry-label" htmlFor="thc">Enter THC percentage: </label>
	                <input
	                class="data-entry-input"
	                id="thc"
	                step="0.01"
	                min="0.00"
	                max="100.00"
	                type="number"
	                value={this.state.thc}
	                onChange={this.handleChange6}
	                />
	                <label className="data-entry-label" htmlFor="thca">Enter THCa percentage: </label>
	                <input
	                class="data-entry-input"
	                id="thca"
	                step="0.01"
	                min="0.00"
	                max="100.00"
	                type="number"
	                value={this.state.thca}
	                onChange={this.handleChange7}
	                />
	                <label className="data-entry-label" htmlFor="cbd">Enter CBD percentage: </label>
	                <input
	                class="data-entry-input"
	                id="cbd"
	                step="0.01"
	                min="0.00"
	                max="100.00"
	                type="number"
	                value={this.state.cbd}
	                onChange={this.handleChange8}
	                />
	                <label className="data-entry-label" htmlFor="email">Enter your email: </label>
	                <input
	                class="data-entry-input"
	                id="email"
	                type="email"
	                value={this.state.email}
	                onChange={this.handleChange9}
	                />
	                <div className="data-entry-submit-btn">
	                	<button id='btn' type="submit">Submit</button>
	                </div>
	            </form>
       		</div>
        );
    }

}

export default dataEntryTest;