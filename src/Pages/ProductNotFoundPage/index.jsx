import React from "react";
import styled from "styled-components";

const ProductNotFoundWrapper = styled.div`
	width: 100%;
	height: auto;
	border: 2px solid red;
`;

export const ProductNotFound = () => {
	return (
		<ProductNotFoundWrapper>
			Product not found!
		</ProductNotFoundWrapper>

	);
};

export default ProductNotFound;