import React from 'react';
import styled from "styled-components";
import './growerInfoComponents/productName.css'

const Body = styled.div`
	width: 40%;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: left !important;
    align-items: top !important;
`;

const Title = styled.p`
	font-size: 2em;
	text-align: center;
	color: #1de8b5;
	font-family: roboto;
`;

const Title2 = styled.p`
	font-size: 1.5em;
	text-align: center;
	`

const Subject = styled.p`
	font-size: 1em;
	text-align: center;
`;

const Stats = styled.p`
	font-size: 1em;
	text-align: center;
	margin: 15px;
`;



class GrowerInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            productName: 'OG KUSH',
			companyName: 'Dank Vapes',
			harvestDate: '02-03-2019',
			strand: 'Sativa',
			thc: '80',
			cbd: '20'
        }
	} 
	render () {
		return (
			<Body>
				<Title>{this.state.productName}</Title>
				<Title2>{this.state.companyName}</Title2>
				<Subject>{this.state.strand}</Subject>
				<div className="stats-container">
					<Stats>THC: {this.state.thc}%</Stats>
					<Stats> CBD: {this.state.cbd}%</Stats>
				</div>
				<Subject>Packaged On:  <span><br/></span>{this.state.harvestDate}</Subject>
				
			</Body>
		);
	}
}
export default GrowerInfo;