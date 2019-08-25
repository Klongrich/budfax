import React from "react";
import styled from "styled-components";

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
    background-color: white;
    z-index: 0;
    padding-top: 40px;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
    overflow: scroll;
`;


const ProductDetailsWrapper = styled.div`
    width: 55%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: left !important;
    align-items: left !important;
    padding: 10px;
`;


const ProductName = styled.div`
	font-family: roboto;
	font-size: 2em;
	margin: 1%;
`;

const Strand = styled.div`
	font-size: 1.25em;
	margin: 0.5%;
`;

// WHY TF WONT THIS DISPLAY ITS CONTENT CENTERED
const ColumnsBud = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: 8%;
`;

const ColumnsDetails = styled.div`
	display: flex;
	flex-direction: row;
	margin-left: 2%;
`;

//img
const Thumbnail = styled.div` 
	border-radius: 15px;
	border: 2px dotted red;
	height: 160px;
	width: 45%;
	margin: 5px 10px;
`;

const BudStatsWrapper = styled.div`
	margin-top: 2%;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

const BudStats = styled.div`
	margin: 2px 10px;
	font-size: 1em;
	text-align: right;
`;	

const Unit = styled.div`
	font-size: 1em;
`;

const DescriptionBox = styled.p`
	width: 100%;
	height: 25%;
	padding: 20px;
	font-size: 14px;
`;

const Verified = styled.div`
	width: 100;
	height: 15%;
	padding: 15px;
	justify-content: center;
	text-align: center;
	align-items: center;
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
		        <Thumbnail>Image: {productInfo.pictureName}</Thumbnail>
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
