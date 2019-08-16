import React from 'react'
import './styles.css'

class dataSubmissionTest extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        name: 'BigKushRips',
        Company: 'Blazers420',
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
        fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
        .then(response => response.json())
        .then(state => this.setState(state));
    }
    
    render () {
        return (
             <div className="App">
    
            <form onSubmit={this.handleSubmit}>
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
