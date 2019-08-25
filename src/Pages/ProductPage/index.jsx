import React from "react";
import styled from "styled-components";
import './thumbnail.css';

// cbd: "",
// companyName: "",
// email: "",
// haverstDate: "",
// numberOfUnits: "",
// pictureName: "",
// productName: "",
// strand: "",
// thc: "",
// thca: ""

const Body = styled.div`
    height: 100%;
    width: 100%;
    background: linear-gradient(to right, rgb(2, 72, 2), rgb(84, 152, 0));
    
    z-index: 0;
    padding-top: 40px;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    overflow: scroll;
    color: white;
`;


const ProductDetailsWrapper = styled.div`
    width: 55%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: left !important;
    align-items: left !important;
    padding: 10px;
    color: white;
`;


const ProductName = styled.div`
	font-family: roboto;
	font-size: 2em;
	margin: 1%;
	color: white;
`;

const Strand = styled.div`
	font-size: 1.25em;
	margin: 0.5%;
	color: white;
`;

// WHY TF WONT THIS DISPLAY ITS CONTENT CENTERED
const ColumnsBud = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: 8%;
	color: white;
`;

const ColumnsDetails = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: 2%;
	color: white;
`;

//img
const Thumbnail = styled.img` 
	border-radius: 15px;
	border: 2px dotted red;
	height: auto;
	width: 45%;
	margin: 5px 10px;
	color: white;
`;

const BudStatsWrapper = styled.div`
	margin-top: 2%;
	justify-content: center;
	align-items: center;
	text-align: center;
	color: white;
`;

const BudStats = styled.div`
	margin: 2px 10px;
	font-size: 1em;
	text-align: right;
	color: white;
`;	

const Unit = styled.div`
	font-size: 1em;
	color: white;
`;

const DescriptionBox = styled.p`
	width: 100%;
	height: 25%;
	padding: 20px;
	font-size: 14px;
	color: white;
`;

const Verified = styled.div`
	width: 100;
	height: 15%;
	padding: 15px;
	justify-content: center;
	text-align: center;
	align-items: center;
	color: white;
`;

const ProductPage = ({ productInfo }) => {
    // Don't need to map. Create styled components in this folder, <div> <h1>{productInfo.cbd}</h1></div> will function the same
    return (
        <Body style={{width: "100%"}}>
        	<ColumnsDetails>
	        	<ProductDetailsWrapper>
		            <ProductName>{productInfo.productName}</ProductName>
		            <Strand>{productInfo.strand}</Strand>
		      		<Unit>{productInfo.companyName}</Unit>
		            <Unit>{productInfo.haverstDate}</Unit>
		        </ProductDetailsWrapper>
		        <Thumbnail src="https://s3.us-east-2.amazonaws.com/www.budfaxs.com/Images/frostynug.jpg"/>
		    </ColumnsDetails>
		    <BudStatsWrapper>
		    	<ColumnsBud>
		            <BudStats>THC: {productInfo.thc}%</BudStats>
		            <BudStats>THCa: {productInfo.thca}%</BudStats>
		            <BudStats>CBD: {productInfo.cbd}%</BudStats>
	            </ColumnsBud>
	            <Unit>Number of Units: {productInfo.numberOfUnits}</Unit>
	        </BudStatsWrapper>
	        <DescriptionBox> adfasdkljfhasdkjlfhasdjkfh</DescriptionBox>
	        <Verified>Verified Icon</Verified>
        </Body>
    );
};

export default ProductPage;
