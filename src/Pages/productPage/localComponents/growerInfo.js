import React from 'react';
import styled from "styled-components";

const Body = styled.div`
	width: 250px;
    background-color: white;
    z-index: 0;
    display: flex;
    flex-direction: column;
    justify-content: center !important;
    align-items: center !important;
    border: 1px solid black;
`;

class GrowerInfo extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            productName: '',
			companyName: '',
			haverstDate: ''
        }
	} 
	render () {
		return (
			<Body>
				<p>yp</p>
			</Body>
		);
	}
}
export default GrowerInfo;