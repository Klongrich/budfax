import React from "react";
import styled from "styled-components";

const ProductNotFoundWrapper = styled.div`
	padding: 20%;
	width: 100%;
	height: 100vmax;
	justify-content: center;
	align-items: center;
`;

const DismissBtn = styled.button`
	width: 50%;
	height: auto;
	value: "hello";
	placeholder: "yes";
	justify-content: center;
	margin:25%;
	display: flex;
	
`;

const NotFoundText = styled.h1`
	text-align: center;
	font-size: 48px;
`;


export const ProductNotFound = ({onClick}) => {
	return (
		<ProductNotFoundWrapper>
			<NotFoundText>Product Not Found!</NotFoundText>
			<DismissBtn onClick={onClick}>Click to return home</DismissBtn>
		</ProductNotFoundWrapper>

	);
};

export default ProductNotFound;