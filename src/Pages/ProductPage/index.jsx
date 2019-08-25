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

const ProductBody = styled.div`
    width: 100%;
    height: 100vh;
`;


const ProductDetailsWrapper = styled.div`
    width: 55%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: left !important;
    align-items: left !important;
    padding-top: 5vw;
    margin-left: 3vw;
    color: white;
`;


const ProductName = styled.div`
	font-family: roboto;
	font-size: 3.4vmax;
	margin: 1%;
	color: white;
`;

const Strand = styled.div`
	font-size: 2.7vmax;
	margin: 0.5%;
	color: white;
`;

const ColumnsBud = styled.div`
	display: flex;
	flex-direction: row;
	color: white;
	justify-content: center;
`;

const ColumnsDetails = styled.div`
	width: 100%;
	height: 50vw;
	display: flex;
	flex-direction: row;
	margin-left: 2%;
	color: white;
`;

//img
const Thumbnail = styled.img` 
	border-radius: 15px;
	height: 45vmin;
	width: 45vmin;
	margin: 5% 5%;
	color: white;
`;

const BudStatsWrapper = styled.div`
	height: auto;
	width: 100%;
	margin-top: 2%;
	justify-content: center;
	align-items: center;
	text-align: center;
	color: white;
`;

const BudStats = styled.div`
	margin-top: 2px;
	margin-left: 5%;
	font-size: 2vmax;
	text-align: right;
	color: white;
	font-family: roboto;
`;	

const Unit = styled.div`
	font-size: 2.5vmax;
	color: white;
	font-family: roboto;
`;

const DateUnit = styled.div`
	font-size: 2vmax;
	color: white;
	font-family: roboto;
`;

const DescriptionBox = styled.p`
	width: 100%;
	height: 25%;
	padding: 20px;
	font-size: 2vmax;
	color: white;
	font-family: roboto;
`;

const Verified = styled.div`
	position: relative;
	bottom: 0px;
	width: 100;
	height: 15%;
	padding: 2%;
	justify-content: center;
	text-align: center;
	align-items: center;
	color: gold;
	font-style: bold;
	font-family: roboto;
	font-size: 2vmax;
`;

const ProductPage = ({ productInfo }) => {
    return (
    	<ProductBody>
        	<ColumnsDetails>
	        	<ProductDetailsWrapper>
		            <ProductName>{productInfo.productName}</ProductName>
		            <Strand>{productInfo.strand}</Strand>
		      		<Unit>{productInfo.companyName}</Unit>
		            <DateUnit>{productInfo.haverstDate}</DateUnit>
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
	        <DescriptionBox> Lorem Ipsum is the single greatest threat. We are not - we are not keeping up with other websites. Lorem Ipsum best not make any more threats to your website. It will be met with fire and fury like the world has never seen. Does everybody know that pig named Lorem Ipsum? An ‘extremely credible source’ has called my office and told me that Barack Obama’s placeholder text is a fraud.</DescriptionBox>
	        <Verified>Verified Icon</Verified>
	    </ProductBody>
    );
};

export default ProductPage;


// <ProductBody>
// 	    	<ColumnsDetails>
// 	        	<ProductDetailsWrapper>
// 		            <ProductName>{productInfo.productName}</ProductName>
// 		            <Strand>{productInfo.strand}</Strand>
// 		      		<Unit>{productInfo.companyName}</Unit>
// 		            <Unit>{productInfo.haverstDate}</Unit>
// 		        </ProductDetailsWrapper>
// 		        <Thumbnail src="https://s3.us-east-2.amazonaws.com/www.budfaxs.com/Images/frostynug.jpg"/>
// 		    </ColumnsDetails>
// 		    <BudStatsWrapper>
// 		    	<ColumnsBud>
// 		            <BudStats>THC: {productInfo.thc}%</BudStats>
// 		            <BudStats>THCa: {productInfo.thca}%</BudStats>
// 		            <BudStats>CBD: {productInfo.cbd}%</BudStats>
// 	            </ColumnsBud>
// 	            <Unit>Number of Units: {productInfo.numberOfUnits}</Unit>
// 	        </BudStatsWrapper>
// 	        <DescriptionBox> adfasdkljfhasdkjlfhasdjkfh</DescriptionBox>
// 	        <Verified>Verified Icon</Verified>
// </ProductBody>