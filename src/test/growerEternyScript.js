import React from 'react'
import './styles.css'

class dataSubmissionTest extends React.Component{
    constructor(props) {
        super(props);
            this.state = {
            name: 'BigKushRips',
            company: 'Blazers420',
            type: 'dank',
            haverstLocation: 'not cleveland ohio',
            haverstDate: '4/20',
            units: '710',
            thc: '94.20',
            thca: '84.20',
            cbd: '0.01',
            cbg: '0.02'
        };
        
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({ name: event.target.value });
    }
    
    
    handleSubmit(event) {
        event.preventDefault();
        fetch(`/api/growerData?name=${encodeURIComponent(this.state.name)}&company=${encodeURIComponent(this.state.company)}&type=${encodeURIComponent(this.state.type)}&haverstLocation=${encodeURIComponent(this.state.haverstLocation)}&units=${encodeURIComponent(this.state.units)}&thc=${encodeURIComponent(this.state.thc)}&thca=${encodeURIComponent(this.state.thca)}&cbd=${encodeURIComponent(this.state.cbd)}&cbg=${encodeURIComponent(this.state.cbg)}`)
        .then(response => response.json())
        .then(state => this.setState(state));
    }
    
    render () {
        return (
             <div className="App">

            <form id="dataforum" onSubmit={this.handleSubmit}>
                 <label htmlFor="name">Enter your name: </label>
                <input
                id="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                />
                <button type="submit">Submit</button>
            </form>
            <p>{this.state.greeting}</p>
       </div>
        );
    }
}

export default dataSubmissionTest;
