import React from 'react';
import './growerEntryForum.css';

function validate(	productName,
				 	companyName,
				 	productImage,
				 	email,
				 	harvestDate,
				 	strand,
				 	numberOfUnit,
				 	thc,
				 	thca,
				 	cbd) {
	return {
		productName: validTextInput(productName),
		companyName: validTextInput(companyName), 
		productImage: startsWithZero(productImage),
		email: startsWithZero(email),
		harvestDate: validDateInput(harvestDate),
		strand: validTextInput(strand),
		numberOfUnit: startsWithZero(numberOfUnit),
		thc: startsWithZero(thc),
		thca: startsWithZero(thca),
		cbd: startsWithZero(cbd), 
	};
}


function validDateInput(e) {
	if (e.length < 10 || e.length > 10)
	{
		return true;
	}
	else if (e.charAt(4) !== '-' || e.charAt(7) !== '-')
	{
		return true;
	}
}

function validTextInput(e) {
	if (startsWithZero(e))
	{
		return true;
	}
	else if (onlyAlphaNum(e)) 
	{
		return true;
	}
}

function onlyAlphaNum(e) 
{
	console.log(e.length);
	for (var i = 0; i < e.length; i++)
	{
		var ch = e.charAt(i);
		console.log(ch);
		console.log(i);
		if (!((ch >= "a" && ch <= "z") || (ch >= "A" && ch <="Z") || (ch >= "0" && ch <= "9") || ch === ' ')) {	
			console.log("FU");
			return true;
		}
	}
	return false;
}

function startsWithZero(e) {
 		if (e.charAt(0) === '0'){
 			return true;
 		}
}

var ID = function () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return Math.random().toString(36).substr(2, 9);
};

class dataEntryTest extends React.Component {
	

	constructor(props) {
		super(props);
		this.state = {
			productName: '',
			companyName: '',
			productImage: '',
			email: '',
			harvestDate: '',
			strand: '',
			numberOfUnit: '',
			thc: '',
			thca: '',
			cbd: '',
			uniqueID: ID()
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
		fetch(`http://ec2-18-224-170-67.us-east-2.compute.amazonaws.com:3010/api/growerData?productName=${encodeURIComponent(this.state.productName)}\
								&companyName=${encodeURIComponent(this.state.companyName)}\
								&email=${encodeURIComponent(this.state.email)}\
								&haverstDate=${encodeURIComponent(this.state.harvestDate)}\
								&strand=${encodeURIComponent(this.state.strand)}\
								&numberOfUints=${encodeURIComponent(this.state.numberOfUnit)}\
								&thc=${encodeURIComponent(this.state.thc)}\
								&thca=${encodeURIComponent(this.state.thca)}\
								&cbd=${encodeURIComponent(this.state.cbd)}\
								&uniqueID=${encodeURIComponent(this.state.uniqueID)}`)
        .then(response => response.json())
		.then(state => this.setState(state))
		
		console.log(this.state);
    }

    canBeSubmitted() {
    	const errors = validate(this.state.productName,
				 				this.state.companyName,
				 				this.state.productImage,
				 				this.state.email,
				 				this.state.harvestDate,
				 				this.state.strand,
				 				this.state.numberOfUnit,
				 				this.state.thc,
				 				this.state.thca,
				 				this.state.cbd);
    	const isDisabled = Object.keys(errors).some(x => errors[x]);
    	return !isDisabled;
 	}

    render () {
    	var today = new Date();
    	var dd = today.getDate();
    	var mm = today.getMonth() + 1;
    	var yyyy = today.getFullYear();
    	if (dd < 10){
    		dd = '0'+ dd;
    	}
    	if (mm < 10){
    		mm = '0' + mm;
    	}
    	today = yyyy + '-' + mm + '-' + dd;
    	const errors = validate(this.state.productName,
					 				this.state.companyName,
					 				this.state.productImage,
					 				this.state.email,
					 				this.state.harvestDate,
					 				this.state.strand,
					 				this.state.numberOfUnit,
					 				this.state.thc,
					 				this.state.thca,
					 				this.state.cbd);
    	const isDisabled = Object.keys(errors).some(x => errors[x]);
        return (
            <div className="grower-data-entry-container">
	            <form onSubmit={this.handleSubmit} className="grower-data-entry-form" onSubmit={this.handleSubmit}>
	                <label id={errors.productName ? "error" : ""} className="data-entry-label" htmlFor="productName">Enter your product name: </label>
	                <input
	                class="data-entry-input"
	                id="productName"
	                type="text"
	                maxlength="32"
	                value={this.state.productName}
	                onChange={this.handleChange1}
	                required
	                />
	                <label /*id={errors.companyName ? "error" : ""}*/ className="data-entry-label" htmlFor="companyName">Enter your company name: </label>
	                <input
	                class="data-entry-input"
	                maxlength="32"
	                id="companyName"
	                type="text"
	                value={this.state.companyName}
	                onChange={this.handleChange2}
	                required
	                />
	                <label /*id={errors.productImage ? "error" : ""}*/ clasName="data-entry-label" htmlFor="productImage">Attach an image: </label>
	                <input
	                class="data-entry-input"
	                id="productImage"
	                type="file"
	                value={this.state.productImage}
	                onChange={this.handleChange10}
	                required
	                />
	                <label /*id={errors.harvestDate ? "error" : ""}*/ className="data-entry-label" htmlFor="harvestDate">Enter your harvest date: </label>
	                <input
	                required pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))"
	                class="data-entry-input"
	                id="harvestDate"
	                min="2010-01-01"
	                max={today}
	                type="date"
	                value={this.state.harvestDate}
	                onChange={this.handleChange3}
	                />
	                <label /*id={errors.strand ? "error" : ""}*/ className="data-entry-label" htmlFor="strand">Enter your strand: </label>
	                <input
	                class="data-entry-input"
	                maxlength="32"
	                id="strand"
	                type="text"
	                value={this.state.strand}
	                onChange={this.handleChange4}
	                required
	                />
	                <label /*id={errors.numberOfUnit ? "error" : ""}*/ className="data-entry-label" htmlFor="numberOfUnit">Enter your number of units: </label>
	                <input
	                class="data-entry-input"
	                id="numberOfUnit"
	                min="0"
	                type="number"
	                value={this.state.numberOfUnit}
	                onChange={this.handleChange5}
	                required
	                />
	                <label  className="data-entry-label" htmlFor="thc">Enter THC percentage: </label>
	                <input
	                /*className={errors.thc ? "error" : ""}*/
	                className="data-entry-input"
	                id="thc"
	                step="0.01"
	                min="0.00"
	                max="100.00"
	                type="number"
	                value={this.state.thc}
	                onChange={this.handleChange6}
	                required
	                />
	                <label  className="data-entry-label" htmlFor="thca">Enter THCa percentage: </label>
	                <input
	                /*id={errors.thca ? "error" : ""}*/
	                class="data-entry-input"
	                id="thca"
	                step="0.01"
	                min="0.00"
	                max="100.00"
	                type="number"
	                value={this.state.thca}
	                onChange={this.handleChange7}
	                required
	                />
	                <label  className="data-entry-label" htmlFor="cbd">Enter CBD percentage: </label>
	                <input
	                /*id={errors.cbd ? "error" : ""}*/
	                className="data-entry-input"
	                id="cbd"
	                step="0.01"
	                min="0.00"
	                max="100.00"
	                type="number"
	                value={this.state.cbd}
	                onChange={this.handleChange8}
	                required
	                />
	                <label /*id={errors.email ? "error" : ""}*/ className="data-entry-label" htmlFor="email">Enter your email: </label>
	                <input
	                class="data-entry-input"
	                id="email"
	                type="email"
	                pattern=".+@+.+."
	                value={this.state.email}
	                onChange={this.handleChange9}
	                required
	                />
	                <div className="data-entry-submit-btn">
	                	<button disabled={isDisabled} id='btn' type="submit">Submit</button>
	                </div>
	            </form>
       		</div>
        );
    }

}

export default dataEntryTest;