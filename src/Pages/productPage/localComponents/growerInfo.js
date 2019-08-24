import React from 'react';
import styled from "styled-components";
import './growerInfoComponents/productName.css'

const Body = styled.div`
	width: 50%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: left !important;
    align-items: top !important;
    border: 1px solid black;
`;

const Title = styled.h1`
	font-size: 1.5em;
	text-align: center;
	color: #1de8b5;
	font-family: roboto;
`;

const Strand = styled.h2`
	font-size: 1em;
	text-align: center;
`;

const Stats = styled.h2`
	font-size: 1em;
	text-align: center;
	margin: 15px;
`;



class GrowerInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            productName: 'OG KUSH',
			companyName: '',
			haverstDate: '',
			strand: 'Sativa',
			thc: '80',
			cbd: '20'
        }
	} 
	render () {
		return (
			<Body>
				<Title>{this.state.productName}</Title>
				<Strand>{this.state.strand}</Strand>
				<div className="stats-container">
					<Stats>THC: {this.state.thc}%</Stats>
					<Stats> CBD: {this.state.cbd}%</Stats>
				</div>
				
			</Body>
		);
	}
}
export default GrowerInfo;