import React from 'react'
import './styles.css'

class dataSubmissionTest extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        name: '',
        greeting: '',
        username: '',
        fuckme: '',
        Othertest: ''
        };
        
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        this.setState({ name: event.target.value });
    }
    
    handleSubmit(event) {
        event.preventDefault();
        fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}&fucking=hello`)
        .then(response => response.json())
        .then(data => {this.setState(data)})
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
            <p>{this.state.fuckme}</p>
            <p>{this.state.Othertest}</p>
       </div>
        );
    }
}

export default dataSubmissionTest;