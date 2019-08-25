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
    border: 1px solid black;
    overflow: scroll;
`;


const ProductDetailsWrapper = styled.div`
    width: 40%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center !important;
    align-items: left !important;
    padding: 10px;
`;


const ProductName = styled.div`
	font-family: roboto;
	font-size: 1.5em;
`;

const ColumnsDiv = styled.div`
	display: flex;
	flex-direction: row;	
`;

//img
const Thumbnail = styled.div` 
	border-radius: 15px;
	border: 2px dotted red;
	height: 160px;
	width: 60%;
	margin: 5px 10px;
`;

const BudStatsWrapper = styled.div`
	margin-top: 2%;
	width: 100%;
	padding-left: 2%;
	justify-content: center;
	align-items: center;
	border: 1px solid green;
`;

const BudStats = styled.div`
	margin: 2px 10px;
	font-size: 1em;
	text-align: right;
`;	

const Unit = styled.div`
	font-size: 1em;
	text-align: center;
	
`;

const DescriptionBox = styled.p`
	
`;

const ProductPage = ({ productInfo }) => {
    // Don't need to map. Create styled components in this folder, <div> <h1>{productInfo.cbd}</h1></div> will function the same
    return (
        <Body style={{width: "100%"}}>
        	<ColumnsDiv>
	        	<ProductDetailsWrapper>
		            <ProductName>{productInfo.productName}</ProductName>
		            <p>{productInfo.companyName}</p>
		            <p>{productInfo.strand}</p>
		        </ProductDetailsWrapper>
		        <Thumbnail>Image: {productInfo.pictureName}</Thumbnail>
		    </ColumnsDiv>
		    <Unit>Packaged on {productInfo.haverstDate}</Unit>
		    <BudStatsWrapper>
		    	<ColumnsDiv>
		            <BudStats>THC: {productInfo.thc}%</BudStats>
		            <BudStats>THCa: {productInfo.thca}%</BudStats>
		            <BudStats>CBD: {productInfo.cbd}%</BudStats>
	            </ColumnsDiv>
	            <Unit>Number of Units: {productInfo.numberOfUnits}</Unit>
	        </BudStatsWrapper>

        </Body>
    );
};

export default ProductPage;
