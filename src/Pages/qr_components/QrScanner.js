import React from 'react';
import styled from "styled-components";
import './QrScanner.css';

// https://www.npmjs.com/package/react-qr-reader | only works with localhost and https
import QrReader from 'react-qr-reader'; 

const Body = styled.div`
	width: 250px;
    background-color: white;
    z-index: 0;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center !important;
    align-items: center !important;
    border: 1px solid black;
`;

class QrScanner extends React.Component {
	state = {
		result: "No Data"
	}

	handleScan = data => {
		if (data) {
			this.setState({
				result: data
			})
		}
		console.log(data);
	}

	handleError = err => {
		console.log(err)
	}

	render() {
		const previewStyle ={
			width: 250,
			height: 250,
		}
		return (
			<Body>
				<QrReader
					className="qr-reader"
					delay={300} // 3 seconds
					onError={this.handleError}
					onScan={this.handleScan}
					style={previewStyle}
				/>
			</Body>

		)
	}
}

export default QrScanner;