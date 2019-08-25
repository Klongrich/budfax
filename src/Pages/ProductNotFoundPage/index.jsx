import React from "react";
import styled from "styled-components";

const ProductNotFoundWrapper = styled.div`
	width: 100%;
	height: auto;
	border: 2px solid red;
`;

const DismissBtn = styled.button`
	
`;

export const ProductNotFound = () => {
	return (
		<ProductNotFoundWrapper>
			Product not found!
			<DismissBtn />
		</ProductNotFoundWrapper>

	);
};

export default ProductNotFound;