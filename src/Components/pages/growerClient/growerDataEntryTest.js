import React from 'react';
import GridLayout from 'react-grid-layout';
import "./dataEntryTest.css"
import "tachyons";


class dataEntryTest extends React.Component {
	constructor(props){
		super(props);
		this.state = { name: '',
				   	   company: '',
				       type: '', ///indica,sativa,hybrid
				       havestLocation: '',
				       havestDate: '',
				       numberOfUnits: '',
				       THC: '',
				       THCa: '',
				       CBD: ''
		};
	}		

	handleChange = ({ target }) => {
		this.setState({ [target.name]: target.value });
	};

	render() {
		return (
			<React.Fragment>
				<div className="data-entry-form tc">
					<form>
						<div className="data-entry-box">
							<label htmlFor="name">Name</label>
							<input
								type="text"
								name="name"
								value={this.state.name}
								onChange={this.handleChange}
							/>
						</div>
						<div className="data-entry-box">
							<label htmlFor="company">Company</label>
							<input
								type="text"
								name="company"
								value={this.state.company}
								onChange={this.handleChange}
							/>
						</div>
						<div className="data-entry-box">
							<label htmlFor="company">Type</label>
							<input
								type="text"
								name="type"
								value={this.state.type}
								onChange={this.handleChange}
							/>
						</div>
						<div className="data-entry-box">
							<label htmlFor="havestLocation">Havest Location</label>
							<input
								type="text"
								name="havestLocation"
								value={this.state.havestLocation}
								onChange={this.handleChange}
							/>
						</div>
						<div className="data-entry-box">
							<label htmlFor="harvestDate">Havest Date</label>
							<input
								type="text"
								name="havestDate"
								value={this.state.harvestDate}
								onChange={this.handleChange}
							/>
						</div>
						<div className="data-entry-box">
							<label htmlFor="company">Number of Units</label>
							<input
								type="text"
								name="numberOfUnits"
								value={this.state.numberOfUnits}
								onChange={this.handleChange}
							/>
						</div>
						<div className="data-entry-box">
							<label htmlFor="THC">THC</label>
							<input
								type="text"
								name="THC"
								value={this.state.THC}
								onChange={this.handleChange}
							/>
						</div>
						<div className="data-entry-box">
							<label htmlFor="THCa">THCa</label>
							<input
								type="text"
								name="THCa"
								value={this.state.THCa}
								onChange={this.handleChange}
							/>
						</div>
						<div className="data-entry-box">
							<label htmlFor="THC">CBD</label>
							<input
								type="text"
								name="CBD"
								value={this.state.CBD}
								onChange={this.handleChange}
							/>
						</div>
						<button id="enter">Submit</button>
					</form>

				</div>

			</React.Fragment>

		);
	}	
}
export default dataEntryTest;